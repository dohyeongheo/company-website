# GitHub 푸시 가이드

## Personal Access Token 설정

### 1단계: GitHub에서 토큰 생성

1. GitHub 웹사이트 접속 후 로그인
2. 우측 상단 프로필 사진 클릭 → **Settings**
3. 왼쪽 메뉴에서 **Developer settings** 클릭
4. **Personal access tokens** → **Tokens (classic)** 선택
5. **Generate new token (classic)** 클릭
6. 토큰 설정:
   - **Note**: `company-website` (토큰 설명)
   - **Expiration**: 원하는 기간 선택 (예: 90 days)
   - **Select scopes**: **repo** 전체 체크박스 선택
7. 하단 **Generate token** 클릭
8. **⚠️ 중요**: 생성된 토큰을 복사하세요! (한 번만 보여집니다)

### 2단계: 토큰으로 푸시

터미널에서 다음 명령어를 실행하세요:

```bash
git push -u origin master
```

**사용자명/비밀번호 입력 시:**
- **Username**: `dohyeongheo` (또는 GitHub 사용자명)
- **Password**: 위에서 생성한 **Personal Access Token** 붙여넣기

---

## 방법 2: SSH 키 사용 (더 안전하고 편리함)

### SSH 키가 이미 있는 경우

1. 원격 저장소 URL을 SSH로 변경:
```bash
git remote set-url origin git@github.com:dohyeongheo/company-website.git
git push -u origin master
```

### SSH 키가 없는 경우

1. SSH 키 생성:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. SSH 키를 GitHub에 추가:
```bash
# 공개 키 복사
cat ~/.ssh/id_ed25519.pub
```

3. GitHub → Settings → SSH and GPG keys → New SSH key
   - 위에서 복사한 공개 키 붙여넣기
   - Add SSH key 클릭

4. 원격 저장소 URL 변경 및 푸시:
```bash
git remote set-url origin git@github.com:dohyeongheo/company-website.git
git push -u origin master
```

---

## 방법 3: GitHub CLI 사용

```bash
# GitHub CLI 설치 후
gh auth login
git push -u origin master
```

---

## 이후 작업

처음 푸시 후에는 다음 명령어로 업데이트할 수 있습니다:

```bash
git add .
git commit -m "변경사항 설명"
git push
```

