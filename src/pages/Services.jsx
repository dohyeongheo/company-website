const Services = () => {
  const services = [
    {
      title: '웹 개발',
      description: '최신 기술을 활용한 반응형 웹사이트와 웹 애플리케이션을 개발합니다.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: '모바일 앱 개발',
      description: 'iOS와 Android 플랫폼을 위한 네이티브 및 하이브리드 앱을 개발합니다.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'UI/UX 디자인',
      description: '사용자 경험을 최우선으로 하는 직관적이고 아름다운 디자인을 제공합니다.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: '클라우드 솔루션',
      description: '안정적이고 확장 가능한 클라우드 인프라 구축 및 마이그레이션을 제공합니다.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: '데이터 분석',
      description: '빅데이터 분석 및 비즈니스 인텔리전스를 통한 데이터 기반 의사결정을 지원합니다.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: '컨설팅',
      description: '비즈니스 전략 및 기술 컨설팅을 통해 최적의 솔루션을 제안합니다.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-semibold text-center tracking-tight">서비스</h1>
          <p className="text-xl text-center mt-8 text-gray-300 max-w-2xl mx-auto">
            고객의 성공을 위한 다양한 서비스를 제공합니다
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-10 hover:border-navy-900 transition-all duration-300"
              >
                <div className="bg-gray-100 w-20 h-20 rounded-lg flex items-center justify-center text-navy-900 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-navy-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 text-navy-900 tracking-tight">
            작업 프로세스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '1', title: '상담', desc: '고객 요구사항 분석 및 상담' },
              { step: '2', title: '기획', desc: '전략 수립 및 계획 수립' },
              { step: '3', title: '개발', desc: '전문가들이 최고 품질로 개발' },
              { step: '4', title: '유지보수', desc: '지속적인 지원 및 개선' },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-navy-900 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-semibold mx-auto mb-8">
                  {process.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-navy-900">{process.title}</h3>
                <p className="text-gray-600 text-lg">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
