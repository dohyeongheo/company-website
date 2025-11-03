import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'E-Commerce 플랫폼',
      category: '웹 개발',
      description: '대규모 전자상거래 플랫폼 구축 프로젝트',
      fullDescription: '고객사와 함께 대규모 전자상거래 플랫폼을 구축했습니다. 높은 트래픽을 처리할 수 있는 안정적인 아키텍처를 설계하고, 실시간 재고 관리 시스템과 결제 통합 기능을 구현했습니다. 반응형 디자인으로 모바일과 데스크톱 모든 환경에서 최적의 사용자 경험을 제공합니다.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      images: [
        { id: 1, bg: 'bg-navy-800', label: '메인 페이지' },
        { id: 2, bg: 'bg-navy-700', label: '상품 상세' },
        { id: 3, bg: 'bg-navy-900', label: '장바구니' },
      ],
    },
    {
      title: '모바일 헬스케어 앱',
      category: '모바일 앱',
      description: '건강 관리 및 진단 서비스를 제공하는 모바일 애플리케이션',
      fullDescription: '사용자의 건강 데이터를 실시간으로 추적하고 분석하는 모바일 애플리케이션을 개발했습니다. 웨어러블 디바이스와 연동하여 심박수, 걸음 수, 수면 패턴 등을 모니터링하고, AI 기반 건강 리포트를 제공합니다. 직관적인 UI/UX로 누구나 쉽게 사용할 수 있도록 설계했습니다.',
      tech: ['React Native', 'Firebase', 'TensorFlow Lite'],
      images: [
        { id: 1, bg: 'bg-gray-700', label: '홈 화면' },
        { id: 2, bg: 'bg-gray-600', label: '데이터 대시보드' },
        { id: 3, bg: 'bg-gray-800', label: '건강 리포트' },
      ],
    },
    {
      title: '기업 관리 시스템',
      category: '엔터프라이즈',
      description: '대기업을 위한 통합 관리 및 분석 시스템',
      fullDescription: '대기업의 업무 효율성을 높이기 위한 종합 관리 시스템을 구축했습니다. 인사, 재무, 프로젝트 관리 등 다양한 부서의 업무를 통합하여 관리할 수 있는 플랫폼입니다. 실시간 대시보드와 고급 분석 기능을 제공하여 경영진의 의사결정을 지원합니다.',
      tech: ['Vue.js', 'Spring Boot', 'Oracle DB', 'Docker'],
      images: [
        { id: 1, bg: 'bg-navy-700', label: '대시보드' },
        { id: 2, bg: 'bg-navy-800', label: '인사 관리' },
        { id: 3, bg: 'bg-navy-600', label: '분석 리포트' },
      ],
    },
    {
      title: '교육 플랫폼',
      category: '웹 개발',
      description: '온라인 교육 콘텐츠 제공 및 학습 관리 시스템',
      fullDescription: '온라인 교육을 위한 종합 플랫폼을 개발했습니다. 실시간 화상 강의, 과제 제출 및 채점, 학습 진도 관리 등 다양한 기능을 제공합니다. 학생과 강사 모두에게 최적화된 인터페이스를 제공하며, 학습 효과를 극대화할 수 있는 분석 도구를 포함했습니다.',
      tech: ['Next.js', 'WebRTC', 'MongoDB', 'Stripe'],
      images: [
        { id: 1, bg: 'bg-gray-600', label: '강의 목록' },
        { id: 2, bg: 'bg-gray-700', label: '강의실' },
        { id: 3, bg: 'bg-gray-800', label: '학습 대시보드' },
      ],
    },
    {
      title: '핀테크 솔루션',
      category: '핀테크',
      description: '안전하고 혁신적인 금융 서비스 플랫폼',
      fullDescription: '블록체인 기술을 활용한 안전한 금융 거래 플랫폼을 구축했습니다. 암호화폐 거래, 스마트 컨트랙트, 자동화된 포트폴리오 관리 등 다양한 금융 서비스를 제공합니다. 최고 수준의 보안과 사용자 친화적인 인터페이스를 결합하여 혁신적인 금융 경험을 제공합니다.',
      tech: ['React', 'Solidity', 'Ethereum', 'Web3.js'],
      images: [
        { id: 1, bg: 'bg-navy-800', label: '거래 화면' },
        { id: 2, bg: 'bg-navy-900', label: '포트폴리오' },
        { id: 3, bg: 'bg-navy-700', label: '거래 내역' },
      ],
    },
    {
      title: 'IoT 관리 시스템',
      category: 'IoT',
      description: '사물인터넷 기기 통합 관리 및 모니터링 시스템',
      fullDescription: '다양한 IoT 기기를 통합하여 관리할 수 있는 플랫폼을 개발했습니다. 실시간 센서 데이터 수집, 원격 제어, 예측 유지보수 등 스마트 홈과 스마트 팩토리를 위한 핵심 기능을 제공합니다. MQTT 프로토콜을 활용한 실시간 통신과 머신러닝 기반 이상 탐지 기능을 구현했습니다.',
      tech: ['Angular', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
      images: [
        { id: 1, bg: 'bg-gray-700', label: '기기 목록' },
        { id: 2, bg: 'bg-gray-800', label: '모니터링 대시보드' },
        { id: 3, bg: 'bg-gray-600', label: '알림 설정' },
      ],
    },
  ]

  const openModal = (project, image) => {
    setSelectedProject(project)
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedProject(null)
  }

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeModal()
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // 모달 열릴 때 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

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
          {projects.map((project, projectIndex) => (
            <div key={projectIndex} className="mb-24 last:mb-0">
              {/* Project Header */}
              <div className="mb-12">
                <span className="text-navy-900 text-sm font-semibold uppercase tracking-wide">
                  {project.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6 text-navy-900 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Project Images Gallery - 3 Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {project.images.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => openModal(project, image)}
                    className={`${image.bg} h-64 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-all duration-300 transform hover:scale-105 relative group`}
                  >
                    <span className="text-white text-4xl font-semibold mb-3">
                      {project.title.charAt(0)}
                    </span>
                    <span className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.label}
                    </span>
                    <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-50 rounded-lg"></div>
                  </div>
                ))}
              </div>

              {/* Project Details */}
              <div className="border border-gray-200 rounded-lg p-10 bg-gray-50">
                <h3 className="text-2xl font-semibold mb-6 text-navy-900">프로젝트 상세</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.fullDescription}
                </p>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-navy-900">사용 기술</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              aria-label="닫기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Image */}
              <div
                className={`${selectedImage.bg} h-96 md:h-[600px] flex flex-col items-center justify-center relative`}
              >
                <span className="text-white text-7xl md:text-9xl font-semibold mb-4">
                  {selectedProject.title.charAt(0)}
                </span>
                <span className="text-white text-2xl font-medium">
                  {selectedImage.label}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-2 text-navy-900">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedImage.label}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = selectedProject.images.findIndex(
                      (img) => img.id === selectedImage.id
                    )
                    const prevIndex =
                      currentIndex === 0
                        ? selectedProject.images.length - 1
                        : currentIndex - 1
                    setSelectedImage(selectedProject.images[prevIndex])
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
                  aria-label="이전 이미지"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const currentIndex = selectedProject.images.findIndex(
                      (img) => img.id === selectedImage.id
                    )
                    const nextIndex =
                      currentIndex === selectedProject.images.length - 1
                        ? 0
                        : currentIndex + 1
                    setSelectedImage(selectedProject.images[nextIndex])
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
                  aria-label="다음 이미지"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}

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
