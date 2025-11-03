import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: '홈' },
    { path: '/about', label: '회사 소개' },
    { path: '/services', label: '서비스' },
    { path: '/portfolio', label: '포트폴리오' },
    { path: '/contact', label: '연락처' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-semibold text-navy-900 tracking-tight">Company</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 lg:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-navy-900 border-b-2 border-navy-900'
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 text-gray-700 hover:text-navy-900 focus:outline-none rounded-md hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-16 bg-white border-t border-gray-100 transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'text-navy-900 bg-gray-50'
                    : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-16"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar

