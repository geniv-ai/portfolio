# 포트폴리오 웹사이트

모던하고 세련된 개인 포트폴리오 웹사이트입니다. Next.js, TypeScript, TailwindCSS, Framer Motion을 활용하여 제작되었습니다.

## ✨ 주요 기능

- 🎨 **모던한 디자인**: Framer/Vercel/Apple 스타일의 미니멀하고 세련된 UI
- 🌙 **다크모드 지원**: 라이트/다크 테마 자동 전환
- 📱 **완전 반응형**: 모든 디바이스에서 최적화된 경험
- ⚡ **빠른 성능**: Next.js App Router와 최적화된 번들링
- 🎭 **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브한 UX
- 🔍 **SEO 최적화**: 메타데이터와 구조화된 마크업
- 📝 **콘텐츠 관리**: JSON 기반의 쉬운 콘텐츠 업데이트

## 🚀 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (권장)

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 홈페이지
│   ├── projects/          # 프로젝트 페이지
│   ├── about/             # 소개 페이지
│   ├── contact/           # 연락 페이지
│   └── layout.tsx         # 루트 레이아웃
├── components/            # 재사용 가능한 컴포넌트
│   └── layout/           # 레이아웃 컴포넌트
├── contexts/             # React Context
├── data/                 # 정적 데이터 (JSON)
└── styles/              # 글로벌 스타일
```

## 🛠️ 설치 및 실행

### 1. 저장소 클론
```bash
git clone <your-repository-url>
cd portfolio-site
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. 프로덕션 빌드
```bash
npm run build
npm start
```

## 📝 커스터마이징

### 개인 정보 수정

1. **이름 및 기본 정보**:
   - `src/app/layout.tsx` - 메타데이터
   - `src/components/layout/Header.tsx` - 헤더 로고
   - `src/components/layout/Footer.tsx` - 푸터 정보

2. **프로젝트 데이터**:
   - `src/data/projects.json` - 프로젝트 목록 수정

3. **소셜 링크**:
   - `src/components/layout/Footer.tsx` - 소셜 미디어 링크
   - `src/app/page.tsx` - 홈페이지 소셜 링크

4. **연락처 정보**:
   - `src/app/contact/page.tsx` - 연락처 정보 및 폼

### 스타일 커스터마이징

- **색상**: `tailwind.config.ts`에서 테마 색상 수정
- **폰트**: Google Fonts에서 원하는 폰트로 변경
- **애니메이션**: Framer Motion 설정 조정

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Background**: White/Dark Gray
- **Text**: Gray-900/Gray-100

### 타이포그래피
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### 컴포넌트
- **Cards**: Glassmorphism 효과
- **Buttons**: Hover 애니메이션
- **Navigation**: 스크롤 시 배경 변경

## 📧 연락 폼 설정

현재는 시뮬레이션 모드로 작동합니다. 실제 이메일 전송을 위해 다음 중 하나를 선택하세요:

### 1. EmailJS 사용
```bash
npm install @emailjs/browser
```

### 2. Formspree 사용
- [Formspree](https://formspree.io)에서 계정 생성
- 엔드포인트 URL을 폼 액션에 추가

### 3. 자체 API 구현
- Next.js API Routes를 사용하여 이메일 서비스 연동

## 🚀 배포

### Vercel (권장)
1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

### 다른 플랫폼
- **Netlify**: `npm run build` 후 `out` 폴더 배포
- **GitHub Pages**: 정적 사이트 생성 후 배포

## 🔧 추가 기능 (선택사항)

### 1. 블로그 기능
- MDX 파일 지원
- 카테고리 및 태그 시스템
- 검색 기능

### 2. 고급 애니메이션
- GSAP + Lenis 스크롤 인터랙션
- Three.js 3D 요소

### 3. CMS 연동
- Notion API
- Sanity
- Contentful

## 📄 라이선스

MIT License - 자유롭게 사용하고 수정하세요.

## 🤝 기여

버그 리포트나 기능 제안은 언제든 환영합니다!

---

**만든이**: Boo Hyeong-Seok  
**연락처**: boo.hyeongseok@example.com
