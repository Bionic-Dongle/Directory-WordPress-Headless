import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Navigation from '../Navigation'
import Footer from '../Footer'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-md text-center">
          <div className="text-6xl mb-4">👨‍💼</div>
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
          <p className="text-gray-600 mb-6">
            Admin dashboard coming soon. This will connect to WordPress admin for managing business listings.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}