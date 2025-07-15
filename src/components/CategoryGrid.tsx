import { Category } from '../types'
import { 
  Utensils, Coffee, ShoppingBag, Wrench, 
  Cross, Sparkles, Car, GraduationCap 
} from 'lucide-react'

interface CategoryGridProps {
  categories: Category[]
  onCategorySelect: (categoryId: string) => void
}

const getIconForCategory = (iconName: string) => {
  const iconMap = {
    'Utensils': Utensils,
    'Coffee': Coffee,
    'ShoppingBag': ShoppingBag,
    'Wrench': Wrench,
    'Cross': Cross,
    'Sparkles': Sparkles,
    'Car': Car,
    'Graduation': GraduationCap
  }
  
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Utensils
  return IconComponent
}

function CategoryGrid({ categories, onCategorySelect }: CategoryGridProps) {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
        <p className="text-lg text-gray-600">Find exactly what you're looking for</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = getIconForCategory(category.icon)
          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <IconComponent className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.business_count} businesses</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryGrid
