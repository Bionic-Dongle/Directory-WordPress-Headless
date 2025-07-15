import React, { useState } from 'react'
import { Building2, Menu, X, Plus, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav id="nav-main" className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Building2 className="h-8 w-8 text-blue-600" />
            Directory
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Categories
            </Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Map
            </Link>
            <Link to="/submit" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
              <Plus className="h-4 w-4" />
              Submit Business
            </Link>
            <Link to="/admin" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
              <User className="h-4 w-4" />
              Admin
            </Link>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Categories
              </Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Map
              </Link>
              <Link to="/submit" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                <Plus className="h-4 w-4" />
                Submit Business
              </Link>
              <Link to="/admin" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                <User className="h-4 w-4" />
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
