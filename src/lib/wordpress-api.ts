// WordPress REST API Client
const WORDPRESS_API_URL = (import.meta as any).env?.VITE_WORDPRESS_API_URL || 'http://localhost/wp-json'

// Mock data for development (same as original)
const MOCK_CATEGORIES = [
  { id: '1', name: 'Restaurants', slug: 'restaurants', icon: 'Utensils', description: 'Local restaurants and dining', business_count: 1 },
  { id: '2', name: 'Cafes', slug: 'cafes', icon: 'Coffee', description: 'Coffee shops and cafes', business_count: 1 },
  { id: '3', name: 'Retail', slug: 'retail', icon: 'ShoppingBag', description: 'Shopping and retail stores', business_count: 1 },
  { id: '4', name: 'Services', slug: 'services', icon: 'Wrench', description: 'Professional services', business_count: 1 },
  { id: '5', name: 'Healthcare', slug: 'healthcare', icon: 'Cross', description: 'Medical and healthcare', business_count: 0 },
  { id: '6', name: 'Beauty', slug: 'beauty', icon: 'Sparkles', description: 'Beauty and wellness', business_count: 0 }
]

const MOCK_BUSINESSES = [
  {
    id: '1',
    name: "Joe's Coffee Shop",
    category_id: '2',
    address: '123 Main St, Melbourne VIC 3000',
    phone: '0312345678',
    website: 'https://joescoffee.com.au',
    email: 'info@joescoffee.com.au',
    description: 'Artisan coffee roasted daily with fresh pastries and light meals. Perfect spot for meetings or casual catch-ups.',
    latitude: -37.8136,
    longitude: 144.9631,
    rating: 4.5,
    review_count: 127,
    hours: {},
    photos: ['https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    status: 'active',
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Main Street Pizza',
    category_id: '1',
    address: '456 Collins St, Melbourne VIC 3000',
    phone: '0387654321',
    website: 'https://mainstreetpizza.com.au',
    email: 'orders@mainstreetpizza.com.au',
    description: 'Authentic wood-fired pizza with fresh local ingredients. Family-owned restaurant serving Melbourne since 1995.',
    latitude: -37.8142,
    longitude: 144.9632,
    rating: 4.2,
    review_count: 89,
    hours: {},
    photos: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    status: 'active',
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Tech Repair Shop',
    category_id: '4',
    address: '789 Bourke St, Melbourne VIC 3000',
    phone: '0398765432',
    website: 'https://techrepair.com.au',
    email: 'support@techrepair.com.au',
    description: 'Professional computer and mobile device repair services. Same-day service available for most repairs.',
    latitude: -37.8140,
    longitude: 144.9633,
    rating: 4.8,
    review_count: 156,
    hours: {},
    photos: ['https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    status: 'active',
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Fashion Boutique',
    category_id: '3',
    address: '321 Chapel St, Melbourne VIC 3141',
    phone: '0395551234',
    website: 'https://fashionboutique.com.au',
    email: 'hello@fashionboutique.com.au',
    description: 'Curated collection of contemporary fashion from local and international designers. Personal styling services available.',
    latitude: -37.8200,
    longitude: 144.9900,
    rating: 4.3,
    review_count: 73,
    hours: {},
    photos: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    status: 'active',
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]

// Transform WordPress data to our Business interface
function transformWordPressBusiness(wpPost: any): any {
  return {
    id: wpPost.id.toString(),
    name: wpPost.title.rendered,
    category_id: wpPost.categories[0]?.toString() || '1',
    address: wpPost.acf?.address || '',
    phone: wpPost.acf?.phone || '',
    website: wpPost.acf?.website || '',
    email: wpPost.acf?.email || '',
    description: wpPost.content.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
    latitude: wpPost.acf?.latitude || 0,
    longitude: wpPost.acf?.longitude || 0,
    rating: wpPost.acf?.rating || 0,
    review_count: wpPost.acf?.review_count || 0,
    hours: wpPost.acf?.hours || {},
    photos: wpPost.acf?.photos || [],
    status: wpPost.status === 'publish' ? 'active' : 'pending',
    featured: wpPost.acf?.featured || false,
    created_at: wpPost.date,
    updated_at: wpPost.modified
  }
}

// Transform WordPress categories
function transformWordPressCategory(wpCategory: any): any {
  return {
    id: wpCategory.id.toString(),
    name: wpCategory.name,
    slug: wpCategory.slug,
    icon: 'Utensils', // Default icon, could be stored in category meta
    description: wpCategory.description,
    business_count: wpCategory.count
  }
}

export interface SearchParams {
  q?: string
  category?: string
  location?: string
  limit?: number
}

export interface BusinessFilters {
  category?: string
  status?: 'pending' | 'active' | 'inactive'
  featured?: boolean
  limit?: number
}

export const apiClient = {
  // Get categories from WordPress
  async getCategories() {
    try {
      const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/categories?per_page=100`)
      if (!response.ok) throw new Error('Failed to fetch categories')
      const wpCategories = await response.json()
      return wpCategories.map(transformWordPressCategory)
    } catch (error) {
      console.log('Using mock categories data:', error)
      return MOCK_CATEGORIES
    }
  },

  // Get businesses from WordPress custom post type
  async getBusinesses(filters: BusinessFilters = {}) {
    try {
      const params = new URLSearchParams()
      if (filters.category) params.append('categories', filters.category)
      if (filters.status === 'active') params.append('status', 'publish')
      if (filters.status === 'pending') params.append('status', 'draft')
      if (filters.limit) params.append('per_page', filters.limit.toString())
      
      // Assuming 'businesses' is our custom post type
      const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/businesses?${params}`)
      if (!response.ok) throw new Error('Failed to fetch businesses')
      const wpBusinesses = await response.json()
      let businesses = wpBusinesses.map(transformWordPressBusiness)
      
      if (filters.featured !== undefined) {
        businesses = businesses.filter((b: any) => b.featured === filters.featured)
      }
      
      return businesses
    } catch (error) {
      console.log('Using mock businesses data:', error)
      let businesses = [...MOCK_BUSINESSES]
      
      if (filters.category) {
        businesses = businesses.filter(b => b.category_id === filters.category)
      }
      if (filters.status) {
        businesses = businesses.filter(b => b.status === filters.status)
      }
      if (filters.featured !== undefined) {
        businesses = businesses.filter((b: any) => b.featured === filters.featured)
      }
      
      return businesses
    }
  },

  // Get single business
  async getBusiness(id: string) {
    try {
      const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/businesses/${id}`)
      if (!response.ok) throw new Error('Failed to fetch business')
      const wpBusiness = await response.json()
      return transformWordPressBusiness(wpBusiness)
    } catch (error) {
      console.log('Using mock business data:', error)
      return MOCK_BUSINESSES.find(b => b.id === id) || null
    }
  },

  // Search businesses
  async searchBusinesses(params: SearchParams) {
    try {
      const searchParams = new URLSearchParams()
      if (params.q) searchParams.append('search', params.q)
      if (params.category) searchParams.append('categories', params.category)
      if (params.limit) searchParams.append('per_page', params.limit.toString())

      const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/businesses?${searchParams}`)
      if (!response.ok) throw new Error('Failed to search businesses')
      const wpBusinesses = await response.json()
      return wpBusinesses.map(transformWordPressBusiness)
    } catch (error) {
      console.log('Using mock search data:', error)
      let businesses = [...MOCK_BUSINESSES]
      
      if (params.q) {
        const query = params.q.toLowerCase()
        businesses = businesses.filter(b => 
          b.name.toLowerCase().includes(query) ||
          b.description.toLowerCase().includes(query)
        )
      }
      if (params.category) {
        businesses = businesses.filter(b => b.category_id === params.category)
      }
      
      return businesses
    }
  },

  // Create business (for form submissions)
  async createBusiness(business: any) {
    try {
      // This would require authentication in real WordPress
      const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/businesses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer YOUR_TOKEN' // Add when auth is set up
        },
        body: JSON.stringify({
          title: business.name,
          content: business.description,
          status: 'draft', // Pending approval
          categories: [business.category_id],
          acf: {
            address: business.address,
            phone: business.phone,
            website: business.website,
            email: business.email,
            latitude: business.latitude,
            longitude: business.longitude,
            hours: business.hours,
            photos: business.photos
          }
        }),
      })
      if (!response.ok) throw new Error('Failed to create business')
      return response.json()
    } catch (error) {
      console.log('Mock: Business submission received:', error)
      return { id: Date.now().toString(), ...business, status: 'pending' }
    }
  },

  // Admin functions (require authentication)
  async getDashboardStats() {
    // This would query WordPress for actual stats
    return {
      total_businesses: 4,
      active_businesses: 4,
      pending_businesses: 0,
      avg_rating: 4.45,
      revenue: 1247
    }
  },

  async getAdminBusinesses() {
    // Get all businesses including drafts (requires admin auth)
    return this.getBusinesses()
  },

  async updateBusiness(id: string, business: any) {
    console.log('Mock: Business update received')
    return { id, ...business }
  },

  async deleteBusiness(_id: string) {
    console.log('Mock: Business deletion received')
    return { success: true }
  },

  async updateBusinessStatus(_id: string, _status: string) {
    console.log('Mock: Business status update received')
    return { success: true }
  }
}
