# INSIDERS × LINER – 할인 프로모션 랜딩페이지

LINER Teams 팀즈 플랜 구독 프로모션을 위한 Next.js 랜딩페이지입니다.
- **공식 결제 링크를 통해 결제시 팀즈 구독 첫 달 50% 할인** (2025년 11월 20일까지)

## 🎯 주요 기능

- ✅ **실시간 카운트다운 타이머** (11월 20일 자정)
- ✅ **폼 기반 할인 신청** (회사명, 이메일, 팀원 수, 연락처)
- ✅ **Vercel PostgreSQL 통합** (데이터 영구 저장)
- ✅ **관리 API** (`GET /api/subscribe` - 모든 신청 조회)
- ✅ **완전 반응형** (모바일/태블릿/데스크톱)
- ✅ **Tailwind CSS** 스타일링

## 🚀 빠른 시작

### 로컬 개발

```bash
# 1. 저장소 복제
git clone <repository-url>
cd liner

# 2. 패키지 설치
npm install

# 3. 개발 서버 시작
npm run dev
```

`http://localhost:3000` 에서 확인하세요.

### Vercel에 배포

1. **GitHub에 푸시**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Vercel에 배포**
   - [Vercel Dashboard](https://vercel.com/dashboard) 접속
   - "Add New" → "Project" → GitHub 저장소 선택
   - Deploy 클릭

3. **PostgreSQL 데이터베이스 생성**
   - Vercel Dashboard → Storage → Create Database (Postgres)
   - 자동 생성된 환경 변수 확인

4. **테이블 초기화**
   - Vercel Dashboard → Storage → SQL Editor
   - 다음 SQL 실행:
   ```sql
   CREATE TABLE IF NOT EXISTS subscriptions (
     id SERIAL PRIMARY KEY,
     company VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     teamSize VARCHAR(50) NOT NULL,
     phoneNumber VARCHAR(50) NOT NULL,
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## 📁 프로젝트 구조

```
liner/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts         # 할인 신청 API
│   ├── page.tsx                 # 메인 랜딩페이지
│   ├── layout.tsx               # 루트 레이아웃
│   └── styles.css               # 글로벌 스타일
├── scripts/
│   └── init-db.ts               # DB 초기화 스크립트
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── SETUP_DATABASE.md            # DB 설정 상세 가이드
```

## 🗄️ API 엔드포인트

### POST /api/subscribe
할인 신청 폼 데이터 저장

**요청:**
```json
{
  "company": "회사명",
  "email": "user@example.com",
  "teamSize": "10",
  "phoneNumber": "010-1234-5678"
}
```

**응답 (성공):**
```json
{
  "success": true,
  "message": "할인 신청이 완료되었습니다!",
  "data": {
    "id": 1,
    "company": "회사명",
    "email": "user@example.com",
    "teamSize": "10",
    "phoneNumber": "010-1234-5678",
    "createdAt": "2025-11-15T10:30:00.000Z"
  }
}
```

### GET /api/subscribe
모든 할인 신청 조회 (관리용)

**응답:**
```json
{
  "total": 2,
  "subscriptions": [
    {
      "id": 1,
      "company": "회사 A",
      "email": "contact@company-a.com",
      "teamSize": "5",
      "bank": "신한은행",
      "accountNumber": "987654321",
      "createdAt": "2025-11-15T09:00:00.000Z"
    },
    {
      "id": 2,
      "company": "회사 B",
      "email": "contact@company-b.com",
      "teamSize": "10",
      "phoneNumber": "010-5678-1234",
      "createdAt": "2025-11-15T10:30:00.000Z"
    }
  ]
}
```

## 🛠️ 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Database**: Vercel PostgreSQL
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 페이지 구성

- **Hero Section**: 타이머 + 메인 메시지 + 버튼
- **Solutions**: 3가지 타겟 (연구자, 학회, 스타트업)
- **Features**: AI 요약, PDF 분석, 팀 공유
- **Video**: 1분 데모 비디오 플레이어
- **Benefits**: 할인 절차 및 조건
- **Testimonials**: 고객 리뷰 + 파트너 로고
- **FAQ**: 자주 묻는 질문
- **Footer**: 연락처 및 링크

## 🔐 환경 변수

필요한 환경 변수 (Vercel에서 자동 생성):
- `POSTGRES_URL`: PostgreSQL 연결 문자열

`.env.example` 참고

## 📱 반응형 디자인

- **Desktop**: 전체 너비 활용
- **Tablet (768px)**: 모바일 친화적 레이아웃
- **Mobile (480px)**: 최소 폰트 크기, 최적화된 터치 인터페이스

## 🔗 외부 링크

- **결제 링크**: https://hey.liner.com/d1ngazm
- **문의**: iamsage9346@gmail.com
- **전화**: 010-4670-9346

## 💡 커스터마이징

### 카운트다운 날짜 변경
`app/page.tsx` 라인 71:
```typescript
const targetDate = new Date('2025-11-20T00:00:00').getTime();
```

### 결제 링크 변경
`app/page.tsx` 라인 753:
```typescript
href="https://your-payment-link.com"
```

### 로고 회사 변경
`app/page.tsx` 라인 521:
```typescript
{['SKT에이닷', 'BC카드', 'LG U+', 'Lenovo'].map(...)}
```

## 📞 지원

문제가 발생하면:
1. `SETUP_DATABASE.md` 참고
2. Vercel Logs 확인: `vercel logs`
3. 환경 변수 확인: `vercel env ls`

---

**© 2025 INSIDERS × LINER. All rights reserved.**
