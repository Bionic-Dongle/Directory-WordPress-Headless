import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import BusinessCard from './components/BusinessCard'
import SearchFilters from './components/SearchFilters'
import MapView from './components/MapView'
import BusinessSubmitForm from './components/BusinessSubmitForm'
import AdminDashboard from './components/admin/AdminDashboard'
import { Business, Category } from './types'
import { apiClient } from './lib/wordpress-api'

function HomePage() {
  const [businesses, setBusinesses] = useState<Business[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [businessesData, categoriesData] = await Promise.all([
          apiClient.getBusinesses({ status: 'active' }),
          apiClient.getCategories()
        ])
        setBusinesses(businessesData)
        setCategories(categoriesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearch = async (query: string, category?: string) => {
    setLoading(true)
    try {
      const results = await apiClient.searchBusinesses({
        q: query,
        category: category
      })
      setBusinesses(results)
      setSearchQuery(query)
      setSelectedCategory(category || '')
    } catch (error) {
      console.error('Error searching:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCategorySelect = async (categoryId: string) => {
    setLoading(true)
    try {
      const results = await apiClient.getBusinesses({ 
        category: categoryId,
        status: 'active'
      })
      setBusinesses(results)
      setSelectedCategory(categoryId)
      setSearchQuery('')
    } catch (error) {
      console.error('Error filtering by category:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <div className="flex items-center justify-center h-96 flex-grow">
          <div className="text-lg">Loading...</div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      
      <div className="flex-grow">
        <Hero 
          cityName="Melbourne"
          businessCount={businesses.length}
          onSearch={handleSearch}
        />
        
        <div className="container mx-auto px-4 py-8">
          <CategoryGrid 
            categories={categories}
            onCategorySelect={handleCategorySelect}
          />
          
          {/* Featured Businesses Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Businesses</h2>
              <p className="text-lg text-gray-600">Discover the most popular and highly-rated businesses in your area</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businesses.filter(b => b.featured).slice(0, 4).map((business) => (
                <div key={business.id} className="relative">
                  <BusinessCard business={business} />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Stories Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
              <p className="text-lg text-gray-600">Discover the stories behind your favorite local businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Local business story" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How Local Businesses Adapted to Change</h3>
                  <p className="text-gray-600 mb-4">Discover how Melbourne's small businesses pivoted during challenging times and emerged stronger than ever.</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By Sarah Johnson • 5 min read</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">Read Full Story</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Community support story" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Supporting Your Local Community</h3>
                  <p className="text-gray-600 mb-4">Learn why shopping local makes a difference and how you can support the businesses that make our neighborhoods special.</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By Michael Chen • 3 min read</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">Read Full Story</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Success story" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">From Startup to Success Story</h3>
                  <p className="text-gray-600 mb-4">Follow the journey of three local entrepreneurs who turned their passion into thriving businesses in Melbourne.</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By Emma Wilson • 7 min read</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">Read Full Story</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <SearchFilters 
            onSearch={handleSearch}
            categories={categories}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory ? 
                categories.find(c => c.id === selectedCategory)?.name || 'Businesses' : 
                'All Businesses'
              }
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded ${viewMode === 'map' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                Map View
              </button>
            </div>
          </div>
          
          {viewMode === 'list' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          ) : (
            <MapView businesses={businesses} />
          )}
          
          {businesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No businesses found</p>
            </div>
          )}
        </div>
        
        {/* Trusted by Thousands Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Thousands</h2>
              <p className="text-xl text-blue-100">Join the growing community of local businesses and customers</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-blue-100">Local Businesses</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">2.5k+</div>
                <div className="text-blue-100">Customer Reviews</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Cities Covered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">4.8★</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<BusinessSubmitForm />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App