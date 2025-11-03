import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 구현 시 백엔드 API로 전송
    // 예: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    // 시뮬레이션을 위한 딜레이
    setTimeout(() => {
      alert('문의사항이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-semibold text-center tracking-tight">연락처</h1>
          <p className="text-xl text-center mt-8 text-gray-300 max-w-2xl mx-auto">
            궁금한 사항이 있으시면 언제든지 문의해주세요
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Email Contact Form */}
            <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 text-navy-900">이메일 문의</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all"
                    placeholder="이름을 입력하세요"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    메시지 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="8"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all resize-none"
                    placeholder="문의하실 내용을 입력하세요"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy-900 text-white py-4 rounded-md font-medium hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '전송 중...' : '제출하기'}
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="border border-gray-200 rounded-lg p-6 md:p-8 lg:p-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 text-navy-900">연락처 정보</h2>
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6 flex-shrink-0">
                      <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2 text-lg">주소</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        서울특별시 강남구 테헤란로 123<br />
                        테헤란빌딩 5층
                      </p>
                      <a
                        href="https://maps.google.com/?q=서울특별시+강남구+테헤란로+123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-900 hover:text-navy-700 text-sm font-medium mt-2 inline-block"
                      >
                        구글 맵에서 보기 →
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6 flex-shrink-0">
                      <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2 text-lg">전화번호</h3>
                      <a
                        href="tel:02-1234-5678"
                        className="text-gray-600 text-lg hover:text-navy-900 transition-colors"
                      >
                        02-1234-5678
                      </a>
                      <p className="text-gray-500 text-sm mt-1">월-금: 09:00 - 18:00</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6 flex-shrink-0">
                      <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2 text-lg">이메일</h3>
                      <a
                        href="mailto:info@company.com"
                        className="text-gray-600 text-lg hover:text-navy-900 transition-colors"
                      >
                        info@company.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6 flex-shrink-0">
                      <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2 text-lg">영업 시간</h3>
                      <p className="text-gray-600 text-lg">월-금: 09:00 - 18:00</p>
                      <p className="text-gray-600 text-lg">토-일: 휴무</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="border border-gray-200 rounded-lg p-10">
                <h2 className="text-3xl font-semibold mb-6 text-navy-900">위치</h2>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.677273682431!2d127.02902631531139!3d37.50041787980728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1580a9d74d3%3A0x5fb8a2f8e0e0e0e0!2z7Iug7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrgrDrrLTroZwg64Ko64-E7ZWY6rWtIDUw!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="회사 위치 지도"
                    className="w-full"
                  />
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  서울특별시 강남구 테헤란로 123, 테헤란빌딩 5층
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
