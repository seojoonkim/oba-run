import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# Currently it looks like:
# <br /><span style={{ color: "#CCFF00", fontWeight: "bold" }}>OBA는 이 장벽을 허물고, 누구나 쉽게 연결되어 함께 성장하는 열린 빌더 생태계를 만듭니다.</span>
# The user wants "한줄 떼고 출력" -> We should add an extra `<br />` or change the structure to have a margin.
# Let's replace `<br />` with `<br /><br />` for a blank line.

old_text = '<br /><span style={{ color: "#CCFF00", fontWeight: "bold" }}>OBA는 이 장벽을 허물고, 누구나 쉽게 연결되어 함께 성장하는 열린 빌더 생태계를 만듭니다.</span>'
new_text = '<br /><br /><span style={{ color: "#CCFF00", fontWeight: "bold" }}>OBA는 이 장벽을 허물고, 누구나 쉽게 연결되어 함께 성장하는 열린 빌더 생태계를 만듭니다.</span>'

content = content.replace(old_text, new_text)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
