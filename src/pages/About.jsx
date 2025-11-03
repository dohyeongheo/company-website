const About = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center tracking-tight">회사 소개</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 lg:mb-10 text-navy-900 tracking-tight">
                우리는 누구인가요?
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  우리 회사는 20XX년 설립 이래, 고객 중심의 혁신적인 서비스를 제공해왔습니다.
                  최고의 품질과 전문성을 바탕으로 고객의 성공을 함께 만들어가고 있습니다.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  우리의 목표는 단순히 서비스를 제공하는 것이 아니라, 고객의 비즈니스 성장에
                  실질적인 기여를 하는 것입니다. 이를 위해 끊임없는 연구개발과 혁신을 통해
                  최신 기술과 트렌드를 선도하고 있습니다.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  전문성, 신뢰성, 혁신이라는 핵심 가치를 바탕으로, 고객 여러분과 함께
                  더 나은 미래를 만들어가겠습니다.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">10+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">년 경력</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">500+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">100+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">전문가</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-2 md:mb-3">1000+</div>
                  <div className="text-gray-600 text-sm sm:text-base md:text-lg">고객사</div>
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
            핵심 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-navy-900">신뢰</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                고객과의 약속을 철저히 지키며, 투명하고 정직한 비즈니스를 추구합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-navy-900">혁신</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                끊임없는 연구개발과 새로운 기술 도입으로 시장을 선도합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-navy-900">협업</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                고객과 팀원들과의 긴밀한 협력을 통해 최상의 결과를 만들어냅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            회사 비전과 미션
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
                우리의 미션
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                고객의 성공이 곧 우리의 성공입니다. 최고의 품질과 서비스로
                고객의 비즈니스 가치를 극대화하고, 함께 성장하는 파트너가 되겠습니다.
              </p>
            </div>

            {/* Vision Card */}
            <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10 hover:border-navy-900 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center mb-6 md:mb-8">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-navy-900">
                우리의 비전
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                업계를 선도하는 최고의 서비스 제공자가 되어, 고객에게 지속 가능한
                가치를 제공하고 글로벌 시장에서 인정받는 기업으로 성장하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12 md:mb-16 lg:mb-20 text-navy-900 tracking-tight">
            대표 인사말
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10 bg-white">
              <div className="flex items-start mb-6 md:mb-8">
                <div className="bg-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">홍길동</h3>
                  <p className="text-gray-600 text-base md:text-lg">대표이사</p>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  안녕하세요. 저희 회사를 방문해주셔서 감사합니다.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  저희 회사는 고객과의 신뢰를 최우선 가치로 여기며, 최고 품질의 서비스를 제공하기 위해
                  끊임없이 노력하고 있습니다. 단순히 비즈니스 관계를 넘어, 고객의 성공적인 성장을
                  함께 만들어가는 진정한 파트너가 되고자 합니다.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  앞으로도 고객 여러분과 함께 성장하고 발전해나가는 회사가 되겠습니다.
                  변함없는 관심과 성원 부탁드립니다.
                </p>
              </div>
              <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t border-gray-200">
                <p className="text-navy-900 font-semibold text-right text-sm md:text-base">감사합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

