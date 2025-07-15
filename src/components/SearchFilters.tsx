import React, { useState } from 'react'
import { Search, Filter, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Category } from '../types'

interface SearchFiltersProps {
  onSearch: (query: string, category?: string) => void
  categories: Category[]
  selectedCategory: string
  searchQuery: string
}

export default function SearchFilters({ 
  onSearch, 
  categories, 
  selectedCategory, 
  searchQuery 
}: SearchFiltersProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery)
  const [localCategory, setLocalCategory] = useState(selectedCategory)
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(localQuery, localCategory)
  }

  const handleCategoryChange = (categoryId: string) => {
    setLocalCategory(categoryId)
    onSearch(localQuery, categoryId)
  }

  const clearFilters = () => {
    setLocalQuery('')
    setLocalCategory('')
    onSearch('', '')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Search & Filter</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search businesses, services, or keywords..."
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">
            Search
          </Button>
          {(localQuery || localCategory) && (
            <Button type="button" variant="outline" onClick={clearFilters}>
              Clear
            </Button>
          )}
        </div>
        
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={localCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Enter location..."
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance
              </label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="5">Within 5 km</option>
                <option value="10">Within 10 km</option>
                <option value="25">Within 25 km</option>
                <option value="50">Within 50 km</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
