import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from '../hooks/useTranslation'

const Portfolio = () => {
  const { t, language } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = useMemo(() => {
    const getProjects = () => {
    const projectKeys = ['ecommerce', 'healthcare', 'enterprise', 'education', 'fintech', 'iot']
    const techStacks = {
      ecommerce: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      healthcare: ['React Native', 'Firebase', 'TensorFlow Lite'],
      enterprise: ['Vue.js', 'Spring Boot', 'Oracle DB', 'Docker'],
      education: ['Next.js', 'WebRTC', 'MongoDB', 'Stripe'],
      fintech: ['React', 'Solidity', 'Ethereum', 'Web3.js'],
      iot: ['Angular', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana'],
    }
    const imageConfigs = {
      ecommerce: [
        { id: 1, bg: 'bg-navy-800', key: 'main' },
        { id: 2, bg: 'bg-navy-700', key: 'product' },
        { id: 3, bg: 'bg-navy-900', key: 'cart' },
      ],
      healthcare: [
        { id: 1, bg: 'bg-gray-700', key: 'home' },
        { id: 2, bg: 'bg-gray-600', key: 'dashboard' },
        { id: 3, bg: 'bg-gray-800', key: 'report' },
      ],
      enterprise: [
        { id: 1, bg: 'bg-navy-700', key: 'dashboard' },
        { id: 2, bg: 'bg-navy-800', key: 'hr' },
        { id: 3, bg: 'bg-navy-600', key: 'analytics' },
      ],
      education: [
        { id: 1, bg: 'bg-gray-600', key: 'courses' },
        { id: 2, bg: 'bg-gray-700', key: 'classroom' },
        { id: 3, bg: 'bg-gray-800', key: 'learning' },
      ],
      fintech: [
        { id: 1, bg: 'bg-navy-800', key: 'trading' },
        { id: 2, bg: 'bg-navy-900', key: 'portfolio' },
        { id: 3, bg: 'bg-navy-700', key: 'history' },
      ],
      iot: [
        { id: 1, bg: 'bg-gray-700', key: 'devices' },
        { id: 2, bg: 'bg-gray-800', key: 'monitoring' },
        { id: 3, bg: 'bg-gray-600', key: 'alerts' },
      ],
    }

    return projectKeys.map((key) => ({
      key,
      title: t(`portfolio.projects.${key}.title`),
      category: t(`portfolio.projects.${key}.category`),
      description: t(`portfolio.projects.${key}.description`),
      fullDescription: t(`portfolio.projects.${key}.fullDescription`),
      tech: techStacks[key],
      images: imageConfigs[key].map((img) => ({
        ...img,
        label: t(`portfolio.projects.${key}.images.${img.key}`),
      })),
    }))

    return projectKeys.map((key) => ({
      key,
      title: t(`portfolio.projects.${key}.title`),
      category: t(`portfolio.projects.${key}.category`),
      description: t(`portfolio.projects.${key}.description`),
      fullDescription: t(`portfolio.projects.${key}.fullDescription`),
      tech: techStacks[key],
      images: imageConfigs[key].map((img) => ({
        ...img,
        label: t(`portfolio.projects.${key}.images.${img.key}`),
      })),
    }))
  }, [t, language])

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
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center tracking-tight">{t('portfolio.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl text-center mt-4 md:mt-8 text-gray-300 max-w-2xl mx-auto px-4">
            {t('portfolio.subtitle')}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {projects.map((project, projectIndex) => (
            <div key={projectIndex} className="mb-16 md:mb-20 lg:mb-24 last:mb-0">
              {/* Project Header */}
              <div className="mb-8 md:mb-12">
                <span className="text-navy-900 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 md:mt-4 mb-4 md:mb-6 text-navy-900 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Project Images Gallery - 3 Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-10">
                {project.images.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => openModal(project, image)}
                    className={`${image.bg} h-48 sm:h-56 md:h-64 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-all duration-300 transform hover:scale-105 relative group`}
                  >
                    <span className="text-white text-3xl sm:text-4xl font-semibold mb-2 sm:mb-3">
                      {project.title.charAt(0)}
                    </span>
                    <span className="text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity px-2 text-center">
                      {image.label}
                    </span>
                    <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-50 rounded-lg"></div>
                  </div>
                ))}
              </div>

              {/* Project Details */}
              <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10 bg-gray-50">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-navy-900">{t('portfolio.projectDetails')}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {project.fullDescription}
                </p>
                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-navy-900">{t('portfolio.usedTech')}</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium text-sm sm:text-base"
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
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 sm:p-2.5 transition-colors"
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
                className={`${selectedImage.bg} h-64 sm:h-80 md:h-96 lg:h-[600px] flex flex-col items-center justify-center relative`}
              >
                <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold mb-2 sm:mb-4">
                  {selectedProject.title.charAt(0)}
                </span>
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium px-4 text-center">
                  {selectedImage.label}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-navy-900">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4 md:mb-6">
                  {selectedImage.label}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            프로젝트 통계
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-2 sm:mb-4">500+</div>
              <div className="text-gray-600 text-sm sm:text-base md:text-lg">완료 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-2 sm:mb-4">1000+</div>
              <div className="text-gray-600 text-sm sm:text-base md:text-lg">만족 고객</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-2 sm:mb-4">50+</div>
              <div className="text-gray-600 text-sm sm:text-base md:text-lg">수상 경력</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-2 sm:mb-4">98%</div>
              <div className="text-gray-600 text-sm sm:text-base md:text-lg">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
