import glob, os

for file in glob.glob("src/components/*.tsx"):
    with open(file, 'r') as f:
        content = f.read()

    # The user says: "스크롤다운할때 페이지의 컴퍼넌트가 애니메이션 로딩된 이후에 깜빡이는 효과가 안나오게 해줘"
    # This might be because 'once: true' is combined with 'margin: "-100px"', which causes elements to jump or reset if not fully contained.
    # Alternatively, the 'once: true' needs to be accompanied by `amount: "some"` or just remove `margin` and use `amount: 0.1`?
    # Or maybe it's the `opacity: 1` transition conflicting with a global `.reveal` class?
    # Wait! In our TOOLS.md: "framer-motion whileInView와 CSS IntersectionObserver reveal 클래스 절대 같이 사용 금지 → 모바일 깜빡임 유발"
    # But I couldn't find "reveal" in src/components/*.tsx
    
    # Is there a `.reveal` in globals.css or `page.tsx`? Let's check globals.css.
