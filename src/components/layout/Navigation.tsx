import { Link, useLocation } from 'react-router-dom'
import mzgbLogo from '../../assets/mzgb.jpeg'

function Navigation() {
  const location = useLocation()

  const getLinkClass = (path: string) => `
    inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium
    ${location.pathname === path
      ? 'border-indigo-500 text-gray-900'
      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
    }
  `

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src={mzgbLogo}
                alt="MZGB Logo"
              />
            </div>
            <div className="ml-6 flex space-x-8">
              <Link to="/" className={getLinkClass('/')}>
                Dashboard
              </Link>
              <Link to="/photos" className={getLinkClass('/photos')}>
                Photos
              </Link>
              <Link to="/statistics" className={getLinkClass('/statistics')}>
                Statistics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 