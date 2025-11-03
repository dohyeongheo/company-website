import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 md:mb-8 tracking-tight">
              혁신과 신뢰의 파트너
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              최고의 품질과 서비스로 고객의 성공을 함께 만들어갑니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Link
                to="/about"
                className="bg-white text-navy-900 px-8 sm:px-10 py-3 sm:py-4 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                회사 소개
              </Link>
              <Link
                to="/contact"
                className="bg-navy-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-md font-medium hover:bg-navy-600 transition-colors border border-navy-600 text-sm sm:text-base"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            우리의 강점
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">고품질 서비스</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                검증된 전문가들이 최고의 품질로 서비스를 제공합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">빠른 대응</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                고객의 요구사항에 신속하고 정확하게 대응합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-900">전문 팀</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                다양한 분야의 전문가들이 협업하여 최적의 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-navy-900 tracking-tight">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            지금 바로 문의하시면 전문 상담을 제공해드립니다.
          </p>
          <Link
            to="/contact"
            className="bg-navy-900 text-white px-10 py-4 rounded-md font-medium hover:bg-navy-800 transition-colors inline-block"
          >
            연락하기
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

