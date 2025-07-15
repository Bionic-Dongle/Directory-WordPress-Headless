import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import BusinessCard from './components/BusinessCard'
import Footer from './components/Footer'
import { apiClient } from './lib/wordpress-api'
import { Business, Category } from './types'

function FullApp() {
  const [businesses, setBusinesses] = useState<Business[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [businessData, categoryData] = await Promise.all([
          apiClient.getBusinesses(),
          apiClient.getCategories()
        ])
        setBusinesses(businessData)
        setCategories(categoryData)
        setFilteredBusinesses(businessData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSearch = async (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const results = await apiClient.searchBusinesses({ q: query, category: selectedCategory })
      setFilteredBusinesses(results)
    } else {
      const results = selectedCategory 
        ? await apiClient.getBusinesses({ category: selectedCategory })
        : businesses
      setFilteredBusinesses(results)
    }
  }

  const handleCategorySelect = async (categoryId: string) => {
    setSelectedCategory(categoryId)
    const results = categoryId
      ? await apiClient.getBusinesses({ category: categoryId })
      : businesses
    setFilteredBusinesses(results)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Loading Melbourne Directory...</h2>
          <p className="text-gray-600">Please wait while we load the businesses</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero 
        cityName="Melbourne" 
        businessCount={businesses.length} 
        onSearch={handleSearch}
      />
      <main className="container mx-auto px-4 py-8">
        <CategoryGrid 
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {selectedCategory ? 'Filtered Businesses' : 'Featured Businesses'}
          </h2>
          {filteredBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No businesses found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<FullApp />} />
          <Route path="/full" element={<FullApp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
