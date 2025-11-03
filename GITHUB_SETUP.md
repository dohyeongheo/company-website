# GitHub 저장소 연동 가이드

## 1단계: GitHub에서 새 저장소 생성

1. GitHub 웹사이트 (https://github.com)에 로그인
2. 오른쪽 상단의 **"+"** 버튼 클릭 → **"New repository"** 선택
3. 저장소 설정:
   - **Repository name**: `company-website` (또는 원하는 이름)
   - **Description**: `Company introduction website built with React and Tailwind CSS`
   - **Visibility**: Public 또는 Private 선택
   - ⚠️ **중요**: "Initialize this repository with a README" 체크박스는 **해제**하세요!
   - "Add .gitignore"도 선택하지 마세요 (이미 있음)
4. **"Create repository"** 버튼 클릭

## 2단계: 저장소 URL 확인

저장소를 생성하면 다음과 같은 URL을 제공합니다:
- HTTPS: `https://github.com/YOUR_USERNAME/company-website.git`
- SSH: `git@github.com:YOUR_USERNAME/company-website.git`

## 3단계: 로컬 저장소에 원격 저장소 추가

터미널에서 다음 명령어를 실행하세요:

```bash
# 원격 저장소 추가 (YOUR_USERNAME을 실제 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/company-website.git

# 원격 저장소 확인
git remote -v

# 모든 변경사항 푸시
git push -u origin master
```

**또는 main 브랜치를 사용하는 경우:**

```bash
git branch -M main
git push -u origin main
```

## 문제 해결

### 이미 원격 저장소가 있는 경우
```bash
# 기존 원격 저장소 확인
git remote -v

# 기존 원격 저장소 제거 (필요시)
git remote remove origin

# 새 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/company-website.git
```

### 인증 오류가 발생하는 경우
- Personal Access Token 사용이 필요할 수 있습니다
- GitHub Settings → Developer settings → Personal access tokens에서 토큰 생성

