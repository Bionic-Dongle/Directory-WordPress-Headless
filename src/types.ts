export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  description: string
  business_count: number
}

export interface Business {
  id: string
  name: string
  category_id: string
  address: string
  phone: string
  website?: string
  email?: string
  description: string
  latitude?: number
  longitude?: number
  rating: number
  review_count: number
  hours?: Record<string, any>
  photos: string[]
  status: 'pending' | 'active' | 'inactive'
  featured: boolean
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  business_id: string
  user_name: string
  rating: number
  comment: string
  created_at: string
}

export interface BusinessCreate {
  name: string
  category_id: string
  address: string
  phone: string
  website?: string
  email?: string
  description: string
  latitude?: number
  longitude?: number
  hours?: Record<string, any>
  photos?: string[]
}

export interface DashboardStats {
  total_businesses: number
  active_businesses: number
  pending_businesses: number
  avg_rating: number
  revenue: number
}

// WordPress specific types
export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  acf?: any // WordPress custom fields
  featured_media: number
  categories: number[]
  status: string
  date: string
  modified: string
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description: string
  count: number
}