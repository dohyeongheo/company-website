import { useTranslation } from '../hooks/useTranslation'

const Services = () => {
  const { t } = useTranslation()

  const services = [
    {
      titleKey: 'services.webDevelopment',
      descKey: 'services.webDevelopmentDesc',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      titleKey: 'services.mobileApp',
      descKey: 'services.mobileAppDesc',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      titleKey: 'services.uiux',
      descKey: 'services.uiuxDesc',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      titleKey: 'services.cloud',
      descKey: 'services.cloudDesc',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      titleKey: 'services.dataAnalysis',
      descKey: 'services.dataAnalysisDesc',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      titleKey: 'services.consulting',
      descKey: 'services.consultingDesc',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  const processes = [
    { step: '1', titleKey: 'services.consultation', descKey: 'services.consultationDesc' },
    { step: '2', titleKey: 'services.planning', descKey: 'services.planningDesc' },
    { step: '3', titleKey: 'services.development', descKey: 'services.developmentDesc' },
    { step: '4', titleKey: 'services.maintenance', descKey: 'services.maintenanceDesc' },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center tracking-tight">{t('services.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl text-center mt-4 md:mt-8 text-gray-300 max-w-2xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10 hover:border-navy-900 transition-all duration-300"
              >
                <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-navy-900 mb-6 md:mb-8">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-navy-900">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {t(service.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            {t('services.processTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {processes.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-navy-900 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl font-semibold mx-auto mb-4 md:mb-6 lg:mb-8">
                  {process.step}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3 lg:mb-4 text-navy-900">{t(process.titleKey)}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">{t(process.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
