const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce 플랫폼',
      category: '웹 개발',
      description: '대규모 전자상거래 플랫폼 구축 프로젝트',
      image: 'bg-navy-800',
    },
    {
      title: '모바일 헬스케어 앱',
      category: '모바일 앱',
      description: '건강 관리 및 진단 서비스를 제공하는 모바일 애플리케이션',
      image: 'bg-gray-700',
    },
    {
      title: '기업 관리 시스템',
      category: '엔터프라이즈',
      description: '대기업을 위한 통합 관리 및 분석 시스템',
      image: 'bg-navy-700',
    },
    {
      title: '교육 플랫폼',
      category: '웹 개발',
      description: '온라인 교육 콘텐츠 제공 및 학습 관리 시스템',
      image: 'bg-gray-600',
    },
    {
      title: '핀테크 솔루션',
      category: '핀테크',
      description: '안전하고 혁신적인 금융 서비스 플랫폼',
      image: 'bg-navy-800',
    },
    {
      title: 'IoT 관리 시스템',
      category: 'IoT',
      description: '사물인터넷 기기 통합 관리 및 모니터링 시스템',
      image: 'bg-gray-700',
    },
  ]

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-semibold text-center tracking-tight">포트폴리오</h1>
          <p className="text-xl text-center mt-8 text-gray-300 max-w-2xl mx-auto">
            성공적으로 완료한 프로젝트들을 소개합니다
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-navy-900 transition-all duration-300"
              >
                <div className={`${project.image} h-56 flex items-center justify-center`}>
                  <span className="text-white text-5xl font-semibold">{project.title.charAt(0)}</span>
                </div>
                <div className="p-8">
                  <span className="text-navy-900 text-sm font-semibold">{project.category}</span>
                  <h3 className="text-2xl font-semibold mt-4 mb-4 text-navy-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <button className="mt-6 text-navy-900 font-semibold hover:text-navy-700 transition-colors">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20 text-navy-900 tracking-tight">
            프로젝트 통계
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-semibold text-navy-900 mb-4">500+</div>
              <div className="text-gray-600 text-lg">완료 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-semibold text-navy-900 mb-4">1000+</div>
              <div className="text-gray-600 text-lg">만족 고객</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-semibold text-navy-900 mb-4">50+</div>
              <div className="text-gray-600 text-lg">수상 경력</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-semibold text-navy-900 mb-4">98%</div>
              <div className="text-gray-600 text-lg">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
