import { useState } from 'react'
import { Search, MapPin, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface HeroProps {
  cityName: string
  businessCount: number
  onSearch: (query: string) => void
}

export default function Hero({ cityName, businessCount, onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <div 
      id="hero-main" 
      className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Building2 className="h-12 w-12 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold">
            {cityName} Directory
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Find Local Businesses Near You
        </p>
        
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search businesses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg text-gray-900"
              />
            </div>
            <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600 px-8">
              Search
            </Button>
            <Button 
              type="button" 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8"
              onClick={() => window.location.href = '/submit'}
            >
              Add Your Business
            </Button>
          </div>
        </form>
        
        <div className="flex items-center justify-center gap-6 text-blue-100">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">{cityName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            <span className="text-lg">{businessCount}+ Businesses</span>
          </div>
        </div>
      </div>
    </div>
  )
}