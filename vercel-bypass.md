# Vercel Deployment Protection 비활성화 방법

## 방법 1: 웹 대시보드 (권장)
1. https://vercel.com/dashboard/seojoonkims-projects/oba-run/settings/protection
2. "Deployment Protection" 섹션 찾기
3. Protection 토글 OFF
4. 저장

## 방법 2: Vercel CLI (대안)
vercel env add PROTECTION_DISABLED=true
vercel deploy --prod

## 방법 3: 임시 Bypass (테스트용)
https://oba.run/?x-vercel-protection-bypass={BYPASS_TOKEN}

## 현재 상태
- 프로젝트 ID: prj_Mbftk60JsxBFQwxx5f3oTVoStiZ0
- 팀: seojoonkims-projects
- 배포: oba-fnd268h32-seojoonkims-projects.vercel.app
- 도메인: oba.run
