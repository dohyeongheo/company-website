import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from '../hooks/useTranslation'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('notFound.title')} - Company</title>
        <meta name="description" content={t('notFound.description')} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-navy-900 mb-4">404</h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-4">
              {t('notFound.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('notFound.message')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-navy-900 text-white px-8 py-3 rounded-md font-medium hover:bg-navy-800 transition-colors inline-block"
            >
              {t('notFound.goHome')}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 text-navy-900 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors inline-block"
            >
              {t('notFound.goBack')}
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4">{t('notFound.suggestions')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="text-navy-900 hover:text-navy-700 text-sm font-medium">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="text-navy-900 hover:text-navy-700 text-sm font-medium">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="text-navy-900 hover:text-navy-700 text-sm font-medium">
                {t('nav.services')}
              </Link>
              <Link to="/portfolio" className="text-navy-900 hover:text-navy-700 text-sm font-medium">
                {t('nav.portfolio')}
              </Link>
              <Link to="/contact" className="text-navy-900 hover:text-navy-700 text-sm font-medium">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound

