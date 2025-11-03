import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 폼 제출 로직 (실제 구현 시 백엔드 API 연동)
    alert('문의사항이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setFormData({ name: '', email: '', phone: '', message: '' })
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
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="border border-gray-200 rounded-lg p-10">
              <h2 className="text-3xl font-semibold mb-10 text-navy-900">문의하기</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                    placeholder="문의하실 내용을 입력하세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy-900 text-white py-4 rounded-md font-medium hover:bg-navy-800 transition-colors"
                >
                  문의하기
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-lg p-10">
                <h2 className="text-3xl font-semibold mb-10 text-navy-900">연락처 정보</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6">
                      <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2 text-lg">주소</h3>
                      <p className="text-gray-600 text-lg">서울특별시 강남구 테헤란로 123</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6">
                      <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2 text-lg">전화</h3>
                      <p className="text-gray-600 text-lg">02-1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6">
                      <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2 text-lg">이메일</h3>
                      <p className="text-gray-600 text-lg">info@company.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mr-6">
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

              {/* Map Placeholder */}
              <div className="border border-gray-200 rounded-lg p-10">
                <h2 className="text-3xl font-semibold mb-6 text-navy-900">위치</h2>
                <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-lg">지도가 여기에 표시됩니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
