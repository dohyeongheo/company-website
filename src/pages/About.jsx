import { Helmet } from 'react-helmet-async'
import { useTranslation } from '../hooks/useTranslation'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.description')} />
        <meta name="keywords" content={t('seo.about.keywords')} />
        <meta property="og:title" content={t('seo.about.title')} />
        <meta property="og:description" content={t('seo.about.description')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.about.title')} />
        <meta name="twitter:description" content={t('seo.about.description')} />
      </Helmet>
      <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center tracking-tight">{t('about.title')}</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 lg:mb-10 text-navy-900 tracking-tight">
                {t('about.whoAreWe')}
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {t('about.whoAreWeText1')}
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {t('about.whoAreWeText2')}
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {t('about.whoAreWeText3')}
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">10+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">{t('about.years')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">500+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">{t('about.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">100+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">{t('about.experts')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">1000+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">{t('about.clients')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            {t('about.valuesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-navy-900">{t('about.trust')}</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t('about.trustDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-navy-900">{t('about.innovation')}</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t('about.innovationDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-navy-900">{t('about.collaboration')}</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t('about.collaborationDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            {t('about.visionMissionTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Mission Card */}
            <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10 hover:border-navy-900 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center mb-6 md:mb-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-navy-900">
                {t('about.mission')}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </div>

            {/* Vision Card */}
            <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10 hover:border-navy-900 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center mb-6 md:mb-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-navy-900">
                {t('about.vision')}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('about.visionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            {t('about.ceoMessageTitle')}
          </h2>
          <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-12 bg-white">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center mr-6 md:mr-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-navy-900">{t('about.ceoName')}</h3>
                <p className="text-gray-600 text-base md:text-lg">{t('about.ceoTitle')}</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('about.ceoMessage1')}
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('about.ceoMessage2')}
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t('about.ceoMessage3')}
              </p>
            </div>
            <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-gray-200">
              <p className="text-navy-900 font-semibold text-right text-sm md:text-base">{t('about.thankYou')}</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default About
