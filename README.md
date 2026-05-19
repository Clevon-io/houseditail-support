# houseditail-support

하우스디테일 고객센터(Help Center) — 약관 · 개인정보 처리방침 · 계정 삭제 안내 · 1:1 문의.
독립 배포 가능한 standalone Next.js(App Router) 사이트로, houseditail 본 사이트의
에디토리얼 디자인을 그대로 따른다.

## 페이지

| 경로 | 내용 |
| --- | --- |
| `/` | 고객센터 허브 (support.toss.im 형식) |
| `/account-deletion` | **Google Play 등록정보용** 계정 삭제 안내 |
| `/faq` | 자주 묻는 질문 |
| `/terms` | 서비스 이용약관 |
| `/privacy` | 개인정보 처리방침 |
| `/inquiry` | 1:1 문의 (메일 클라이언트 연동) |

## Google Play 요건 충족 — `/account-deletion`

- **앱 / 개발자 이름** : 상단 메타 카드에 스토어 등록정보와 동일하게 표기
- **계정 삭제 단계** : 앱 내(마이페이지 › 계정 관리 › 회원 탈퇴) + 앱 없이(이메일/문의) 두 경로를 단계별로 명시
- **삭제 / 보관 데이터 + 추가 보관 기간** : 항목별 표 (법령 근거 포함)

이 URL을 Google Play Console 데이터 보안 → 계정 삭제 URL에 등록한다.

## 운영 값 설정

스토어 등록정보와 **정확히 일치**해야 하는 값(앱 이름·개발자 이름·연락처·
보관 기간 등)은 모두 `lib/site.ts` 한 곳에서 관리한다. 현재 `OOOO`
자리표시자는 houseditail 본 사이트 푸터와 동일한 컨벤션이며, 배포 전
실제 법인/연락처 값으로 교체해야 한다.

## 개발

```bash
pnpm install      # 또는 npm install
pnpm dev          # http://localhost:3100
pnpm build
```
