import { Building2, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Directory</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the best local businesses in your area. Supporting communities one business at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-blue-400">Categories</Link></li>
              <li><Link to="/submit" className="text-gray-400 hover:text-blue-400">Submit Business</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-blue-400">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@directory.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(03) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Melbourne, VIC Australia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Directory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}