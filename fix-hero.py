import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Update text content
old_text = """바이브코딩은 소프트웨어 제작 역량을 빠르게 대중화하고 있습니다.
            하지만 한국에서 <span style={{ color: "#CCFF00", fontWeight: "bold" }}>외부 개발자에게 인터페이스를 공개한 회사는 너무 희귀합니다</span>.
            빌더들이 해외 플랫폼과 서비스를 기반으로 만드는 이유도 여기에 있습니다."""

new_text = """바이브코딩은 소프트웨어 제작 역량을 빠르게 대중화하고 있습니다.
            하지만 한국에서 <span style={{ color: "#CCFF00", fontWeight: "bold" }}>외부 개발자에게 인터페이스를 공개한 회사는 너무 희귀합니다</span>.
            OBA는 이 장벽을 허물고, 누구나 쉽게 연결되어 함께 성장하는 열린 빌더 생태계를 만듭니다."""

content = content.replace(old_text, new_text)

# 2. Make background more visible
# Currently:
# opacity-30 for the image
# And the gradient: "linear-gradient(180deg, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.66) 48%, rgba(0,0,0,0.86) 100%)"
# We can reduce the black overlay opacity:
old_bg = "linear-gradient(180deg, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.66) 48%, rgba(0,0,0,0.86) 100%)"
new_bg = "linear-gradient(180deg, rgba(0,0,0,0.64) 0%, rgba(0,0,0,0.56) 48%, rgba(0,0,0,0.76) 100%)"

content = content.replace(old_bg, new_bg)

# Also maybe increase the image opacity from opacity-30 to opacity-40? Or let's just reduce the overlay gradient first.
# "opacity-30 hero-image-texture"
content = content.replace('className="object-cover opacity-30 hero-image-texture"', 'className="object-cover opacity-40 hero-image-texture"')

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
