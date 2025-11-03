# 포트폴리오 이미지 추가 가이드

## 1. 이미지 파일 준비 및 저장 위치

### 이미지 파일 구조
```
public/
  images/
    portfolio/
      ecommerce/
        main.jpg
        product.jpg
        cart.jpg
      healthcare/
        home.jpg
        dashboard.jpg
        report.jpg
      enterprise/
        dashboard.jpg
        hr.jpg
        analytics.jpg
      education/
        courses.jpg
        classroom.jpg
        learning.jpg
      fintech/
        trading.jpg
        portfolio.jpg
        history.jpg
      iot/
        devices.jpg
        monitoring.jpg
        alerts.jpg
```

### 이미지 권장 사양
- **형식**: JPG, PNG, WebP
- **크기**: 가로 1200px ~ 1920px (최적화된 크기)
- **용량**: 각 이미지 200KB 이하 권장 (로딩 속도 향상)
- **비율**: 16:9 또는 4:3 비율 권장

## 2. 코드 수정 방법

### 수정해야 할 파일: `src/pages/Portfolio.jsx`

**변경 전 (현재 코드):**
```javascript
const imageConfigs = {
  ecommerce: [
    { id: 1, bg: 'bg-navy-800', key: 'main' },
    { id: 2, bg: 'bg-navy-700', key: 'product' },
    { id: 3, bg: 'bg-navy-900', key: 'cart' },
  ],
  // ...
}
```

**변경 후:**
```javascript
const imageConfigs = {
  ecommerce: [
    { id: 1, src: '/images/portfolio/ecommerce/main.jpg', key: 'main' },
    { id: 2, src: '/images/portfolio/ecommerce/product.jpg', key: 'product' },
    { id: 3, src: '/images/portfolio/ecommerce/cart.jpg', key: 'cart' },
  ],
  healthcare: [
    { id: 1, src: '/images/portfolio/healthcare/home.jpg', key: 'home' },
    { id: 2, src: '/images/portfolio/healthcare/dashboard.jpg', key: 'dashboard' },
    { id: 3, src: '/images/portfolio/healthcare/report.jpg', key: 'report' },
  ],
  // 나머지 프로젝트도 동일하게 수정
}
```

### JSX 수정 (갤러리 부분)

**Line 140-154 부분을 다음과 같이 수정:**

```jsx
{project.images.map((image) => (
  <div
    key={image.id}
    onClick={() => openModal(project, image)}
    className="h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-all duration-300 transform hover:scale-105 relative group"
  >
    <img
      src={image.src}
      alt={image.label}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
      <span className="text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity px-2 text-center font-medium">
        {image.label}
      </span>
    </div>
  </div>
))}
```

### JSX 수정 (모달 부분)

**Line 216-225 부분을 다음과 같이 수정:**

```jsx
<div className="bg-white rounded-lg overflow-hidden">
  {/* Image */}
  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] bg-gray-100">
    <img
      src={selectedImage.src}
      alt={selectedImage.label}
      className="w-full h-full object-contain"
    />
  </div>
  {/* 나머지 코드는 동일 */}
</div>
```

## 3. 이미지 최적화 팁

### 온라인 이미지 압축 도구
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim

### 이미지 포맷 선택
- **JPG**: 사진, 복잡한 이미지 (용량 최적화)
- **PNG**: 로고, 간단한 그래픽 (투명도 필요 시)
- **WebP**: 최신 브라우저에서 최고 압축률

## 4. 대체 이미지 처리 (이미지 없을 때)

이미지가 없거나 로딩 실패 시를 대비한 fallback:

```jsx
<img
  src={image.src}
  alt={image.label}
  className="w-full h-full object-cover"
  loading="lazy"
  onError={(e) => {
    e.target.src = '/images/placeholder.jpg'; // 대체 이미지
    e.target.onerror = null; // 무한 루프 방지
  }}
/>
```

