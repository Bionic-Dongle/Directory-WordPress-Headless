import React from 'react'
import { Star, MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'
import { Business } from '../types'

interface BusinessCardProps {
  business: Business
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const renderStars = (rating: number) => {
    const stars: React.ReactElement[] = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }
    
    return stars
  }

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }

  return (
    <div id="business-card" className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-video bg-gray-200 relative">
        {business.photos.length > 0 ? (
          <img 
            src={business.photos[0]} 
            alt={business.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-6xl">📸</div>
          </div>
        )}
        {business.featured && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{business.name}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {renderStars(business.rating)}
          </div>
          <span className="text-sm text-gray-600">
            ({business.rating.toFixed(1)}) {business.review_count} reviews
          </span>
        </div>
        
        <div className="flex items-start gap-2 mb-2 text-gray-600">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{business.address}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-2 text-gray-600">
          <Phone className="h-4 w-4" />
          <span className="text-sm">{formatPhone(business.phone)}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-gray-600">
          <Clock className="h-4 w-4" />
          <span className="text-sm text-green-600 font-medium">Open until 5:00 PM</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {business.description}
        </p>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button size="sm" className="flex-1">
            <Phone className="h-4 w-4 mr-1" />
            Call Now
          </Button>
          {business.website && (
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
