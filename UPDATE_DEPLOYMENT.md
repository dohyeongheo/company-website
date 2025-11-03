# 배포된 페이지 업데이트 가이드

배포 완료 후 코드를 수정하고 배포된 페이지에 반영하는 방법입니다.

## 🔄 자동 배포 (CI/CD)

대부분의 배포 플랫폼은 **GitHub 연동 시 자동 배포**를 지원합니다.

### 자동 배포 작동 방식

1. **로컬에서 코드 수정**
2. **변경사항 커밋 및 푸시**
3. **자동으로 빌드 및 배포 시작** ✨
4. **배포 완료 후 자동 반영** 🎉

---

## 📋 업데이트 프로세스 (단계별)

### 1단계: 코드 수정

로컬에서 파일을 수정합니다.
```bash
# 예: src/pages/Home.jsx 파일 수정
```

### 2단계: 변경사항 확인

```bash
git status
```

### 3단계: 변경사항 스테이징 및 커밋

```bash
git add .
git commit -m "홈페이지 헤로 섹션 수정"
```

또는 특정 파일만 커밋:
```bash
git add src/pages/Home.jsx
git commit -m "홈페이지 업데이트"
```

### 4단계: GitHub에 푸시

```bash
git push origin master
```

### 5단계: 자동 배포 확인

- **Vercel**: 대시보드에서 배포 진행 상황 실시간 확인
- **Netlify**: Deploys 탭에서 배포 상태 확인
- **GitHub Pages**: Actions 탭에서 배포 진행 상황 확인

---

## 🔍 플랫폼별 자동 배포 확인

### Vercel

1. **Vercel 대시보드 접속**: https://vercel.com/dashboard
2. **프로젝트 선택**: `company-website`
3. **Deployments 탭**에서 배포 진행 상황 확인
   - "Building..." → "Ready" 상태로 변경
   - 보통 2-5분 소요

**배포 알림:**
- 성공 시: 이메일 알림 (설정한 경우)
- 실패 시: 에러 로그 표시

### Netlify

1. **Netlify 대시보드 접속**: https://app.netlify.com
2. **프로젝트 선택**: `company-website`
3. **Deploys 탭**에서 배포 상태 확인
   - "Building" → "Published" 상태로 변경

**자동 배포 설정 확인:**
- Site settings → Build & deploy → Continuous Deployment
- "Build hook"으로 수동 배포도 가능

### GitHub Pages

1. **GitHub 저장소 페이지**: https://github.com/dohyeongheo/company-website
2. **Actions 탭** 클릭
3. **워크플로우 실행 상태** 확인
   - "Deploy to GitHub Pages" 워크플로우 확인
   - 초록색 체크 표시 = 성공

---

## ⚙️ 수동 배포 (필요한 경우)

일부 플랫폼에서는 수동 배포도 지원합니다.

### Vercel 수동 배포

```bash
# Vercel CLI 설치 (처음 한 번만)
npm i -g vercel

# 로그인
vercel login

# 프로젝트 연결 (처음 한 번만)
vercel

# 배포
vercel --prod
```

### Netlify 수동 배포

1. **Netlify 대시보드** → **Site settings** → **Build & deploy**
2. **Build hooks** 섹션에서 웹훅 URL 복사
3. 다음 명령어로 빌드 후 수동 배포:
```bash
npm run build
# dist 폴더를 Netlify에 드래그 앤 드롭
```

또는 Netlify CLI 사용:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🎯 배포 전 확인사항

### 로컬에서 빌드 테스트

배포 전에 항상 로컬에서 빌드 테스트를 권장합니다:

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

문제가 없다면 배포해도 안전합니다.

---

## 🐛 배포 실패 시

### 문제 해결 단계

1. **빌드 로그 확인**
   - Vercel/Netlify/GitHub Actions의 빌드 로그 확인
   - 에러 메시지 확인

2. **로컬 빌드 테스트**
   ```bash
   npm run build
   ```
   - 로컬에서 빌드 실패 시 배포도 실패함

3. **의존성 문제**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

4. **환경 변수 확인**
   - 배포 플랫폼의 환경 변수 설정 확인

---

## 📊 배포 상태 모니터링

### Vercel 대시보드 기능
- ✅ 실시간 배포 진행 상황
- ✅ 배포 성공/실패 알림
- ✅ 배포 히스토리
- ✅ 프리뷰 배포 (Pull Request마다)

### Netlify 대시보드 기능
- ✅ 배포 상태 및 로그
- ✅ 롤백 기능 (이전 버전으로 되돌리기)
- ✅ 분할 테스트 (A/B 테스트)

---

## 🔄 롤백 (이전 버전으로 되돌리기)

### Vercel
- 대시보드 → Deployments → 이전 배포 → "Promote to Production"

### Netlify
- Deploys 탭 → 이전 배포 → "Publish deploy"

### GitHub Pages
- Actions 탭 → 이전 워크플로우 실행 → "Re-run jobs"

---

## 💡 베스트 프랙티스

1. **작은 변경사항도 커밋**
   - 자동 배포가 빠르고 안전함

2. **커밋 메시지 명확히 작성**
   ```bash
   git commit -m "홈페이지 헤로 섹션 타이틀 수정"
   ```

3. **배포 전 로컬 테스트**
   ```bash
   npm run build && npm run preview
   ```

4. **배포 상태 확인**
   - 푸시 후 배포 플랫폼 대시보드에서 상태 확인

5. **프로덕션/개발 환경 분리**
   - 개발 중: `npm run dev`
   - 배포 전: `npm run build` → 확인
   - 배포: `git push`

---

## 🚀 요약

**가장 간단한 업데이트 프로세스:**

```bash
# 1. 코드 수정
# 2. 변경사항 커밋
git add .
git commit -m "변경사항 설명"

# 3. GitHub에 푸시 (자동 배포 시작!)
git push origin master

# 4. 배포 완료까지 2-5분 대기
# 5. 배포된 사이트에서 변경사항 확인 ✅
```

**핵심:** GitHub에 푸시만 하면 자동으로 배포됩니다! 🎉

