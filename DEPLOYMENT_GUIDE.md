# 무료 배포 가이드

React + Vite 프로젝트를 무료로 배포하는 방법입니다.

## 🚀 추천 배포 플랫폼

### 1. Vercel (가장 추천 ⭐)

**장점:**
- GitHub 연동 시 자동 배포
- 매우 빠른 CDN
- 무료 SSL 인증서
- 프리뷰 배포 자동 생성
- 사용이 매우 간단

**배포 방법:**

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 가져오기**
   - Dashboard → "Add New Project"
   - GitHub 저장소 선택: `dohyeongheo/company-website`
   - Vercel이 자동으로 프로젝트 설정 감지

3. **빌드 설정 (자동 설정됨)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **환경 변수 설정 (필요 시)**
   - 환경 변수가 있다면 여기서 추가

5. **Deploy 클릭**
   - 배포 완료 후 자동으로 URL 제공 (예: `company-website.vercel.app`)
   - 커스텀 도메인 연결 가능

**자동 배포:**
- `main` 또는 `master` 브랜치에 푸시 시 자동 배포
- Pull Request 생성 시 프리뷰 배포 자동 생성

---

### 2. Netlify (추천 ⭐⭐)

**장점:**
- GitHub 연동 쉬움
- 무료 SSL
- 폼 처리 기능 포함
- 빠른 설정

**배포 방법:**

1. **Netlify 계정 생성**
   - https://www.netlify.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 가져오기**
   - Sites → "Add new site" → "Import an existing project"
   - GitHub 저장소 선택: `dohyeongheo/company-website`

3. **빌드 설정**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy site 클릭

4. **자동 배포 설정**
   - Site settings → Build & deploy
   - Continuous Deployment 활성화 (기본 활성화됨)

**추가 설정 (netlify.toml 파일 생성 - 선택사항):**

프로젝트 루트에 `netlify.toml` 파일 생성:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**장점:**
- GitHub와 완전 통합
- 완전 무료
- 간단한 정적 사이트에 적합

**단점:**
- 빌드 설정이 조금 복잡
- 자동 배포 설정 필요

**배포 방법:**

1. **GitHub Actions 설정**

프로젝트 루트에 `.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. **vite.config.js 수정**

`vite.config.js`에 base 경로 추가:
```javascript
export default defineConfig({
  base: '/company-website/', // 저장소 이름과 동일하게
  // ... 나머지 설정
})
```

3. **GitHub 저장소 설정**
   - Settings → Pages
   - Source: "GitHub Actions" 선택

4. **배포 트리거**
   - `master` 브랜치에 푸시하면 자동 배포
   - URL: `https://dohyeongheo.github.io/company-website/`

---

### 4. Cloudflare Pages

**장점:**
- 매우 빠른 속도 (Cloudflare CDN)
- 무료 SSL
- 자동 배포

**배포 방법:**

1. **Cloudflare 계정 생성**
   - https://pages.cloudflare.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 연결**
   - "Create a project" → "Connect to Git"
   - 저장소 선택: `dohyeongheo/company-website`

3. **빌드 설정**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **Deploy 클릭**
   - 배포 완료 후 URL 제공 (예: `company-website.pages.dev`)

---

## 📋 배포 전 체크리스트

### 1. 프로덕션 빌드 테스트
```bash
npm run build
npm run preview
```

### 2. 환경 변수 확인
- `.env` 파일이 있다면 프로덕션 환경 변수 설정

### 3. API 엔드포인트 확인
- 상대 경로 사용 권장 (`/api/...`)
- 절대 경로 대신 상대 경로 사용

### 4. 404 페이지 테스트
- 직접 입력한 URL이 올바르게 작동하는지 확인

---

## 🔧 Vite 프로젝트 설정 확인

### Router 모드 확인
현재 프로젝트는 BrowserRouter를 사용 중이므로, 다음 설정이 필요할 수 있습니다:

배포 플랫폼별 404 리다이렉션 설정:
- **Vercel**: `vercel.json` 파일 생성
- **Netlify**: `netlify.toml` 파일 생성 (위 참고)
- **GitHub Pages**: vite.config.js의 base 경로 설정

---

## 🌐 커스텀 도메인 연결

모든 플랫폼에서 커스텀 도메인 연결이 가능합니다:

1. 도메인 구매 (예: GoDaddy, Namecheap)
2. 배포 플랫폼의 도메인 설정에서:
   - DNS 레코드 추가 (CNAME 또는 A 레코드)
   - SSL 인증서 자동 발급

---

## 📊 플랫폼 비교

| 플랫폼 | 속도 | 설정 난이도 | 무료 한도 | 추천도 |
|--------|------|------------|----------|--------|
| Vercel | ⭐⭐⭐⭐⭐ | 매우 쉬움 | 넉넉함 | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐⭐⭐⭐ | 쉬움 | 넉넉함 | ⭐⭐⭐⭐ |
| GitHub Pages | ⭐⭐⭐ | 보통 | 넉넉함 | ⭐⭐⭐ |
| Cloudflare Pages | ⭐⭐⭐⭐⭐ | 쉬움 | 넉넉함 | ⭐⭐⭐⭐ |

---

## 🎯 가장 빠른 배포 방법 (Vercel)

1. https://vercel.com 접속
2. GitHub로 로그인
3. "Add New Project" 클릭
4. 저장소 선택: `dohyeongheo/company-website`
5. "Deploy" 클릭
6. 완료! 🎉

**예상 소요 시간: 2-3분**

