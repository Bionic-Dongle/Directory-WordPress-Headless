import { Business } from '../types'

interface MapViewProps {
  businesses: Business[]
}

export default function MapView({ businesses }: MapViewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <div className="text-6xl mb-4">🗺️</div>
      <h3 className="text-xl font-semibold mb-2">Map View Coming Soon</h3>
      <p className="text-gray-600 mb-4">
        Interactive map showing {businesses.length} businesses in your area
      </p>
    </div>
  )
}