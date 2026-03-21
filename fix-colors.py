import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# Replace:
# <span style={{ color: "#CCFF00", fontWeight: "bold" }}>외부 개발자에게 인터페이스를 공개한 회사는 너무 희귀합니다</span>
# With red theme color (#FF2D78)
old_text1 = '<span style={{ color: "#CCFF00", fontWeight: "bold" }}>외부 개발자에게 인터페이스를 공개한 회사는 너무 희귀합니다</span>'
new_text1 = '<span style={{ color: "#FF2D78", fontWeight: "bold" }}>외부 개발자에게 인터페이스를 공개한 회사는 너무 희귀합니다</span>'

content = content.replace(old_text1, new_text1)

# Replace:
# OBA는 이 장벽을 허물고, 누구나 쉽게 연결되어 함께 성장하는 열린 빌더 생태계를 만듭니다.
# With yellow theme color (#CCFF00)
old_text2 = 'OBA는 이 장벽을 허물고, 누구나 쉽게 연결되어 함께 성장하는 열린 빌더 생태계를 만듭니다.'
new_text2 = '<br /><span style={{ color: "#CCFF00", fontWeight: "bold" }}>OBA는 이 장벽을 허물고, 누구나 쉽게 연결되어 함께 성장하는 열린 빌더 생태계를 만듭니다.</span>'

content = content.replace(old_text2, new_text2)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
