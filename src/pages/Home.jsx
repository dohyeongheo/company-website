import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from '../hooks/useTranslation'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
        <meta name="keywords" content={t('seo.home.keywords')} />
        <meta property="og:title" content={t('seo.home.title')} />
        <meta property="og:description" content={t('seo.home.description')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.home.title')} />
        <meta name="twitter:description" content={t('seo.home.description')} />
      </Helmet>
      <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 md:mb-8 tracking-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link
                to="/about"
                className="bg-white text-navy-900 px-8 sm:px-10 py-3 sm:py-4 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                {t('home.aboutButton')}
              </Link>
              <Link
                to="/contact"
                className="bg-navy-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md font-medium hover:bg-navy-600 transition-colors border border-navy-600 text-sm sm:text-base"
              >
                {t('home.contactButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            {t('home.strengthsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-navy-900">{t('home.qualityService')}</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t('home.qualityServiceDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-navy-900">{t('home.fastResponse')}</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t('home.fastResponseDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-navy-900">{t('home.expertTeam')}</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t('home.expertTeamDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 text-navy-900 tracking-tight px-4">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-gray-600 max-w-2xl mx-auto px-4">
            {t('home.ctaSubtitle')}
          </p>
          <Link
            to="/contact"
            className="bg-navy-900 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md font-medium hover:bg-navy-800 transition-colors inline-block text-sm sm:text-base"
          >
            {t('home.ctaButton')}
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}

export default Home

