import re

file = 'src/components/Hero.tsx'
with open(file, 'r') as f:
    content = f.read()

# Replace "join" anchor
content = re.sub(
    r'<a\s+href="#join"',
    r'<button\n              onClick={(e) => { e.preventDefault(); document.getElementById("join")?.scrollIntoView({ behavior: "smooth" }); }}\n              type="button"',
    content
)

# Closing tag for join
content = re.sub(
    r'텔레그램 채널 들어가기\n\s*</a>',
    r'텔레그램 채널 들어가기\n            </button>',
    content
)

# Replace "what-we-do" anchor
content = re.sub(
    r'<a\s+href="#what-we-do"',
    r'<button\n              onClick={(e) => { e.preventDefault(); document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" }); }}\n              type="button"',
    content
)

# Closing tag for what-we-do
content = re.sub(
    r'무엇을 하는지 보기\n\s*</a>',
    r'무엇을 하는지 보기\n            </button>',
    content
)

with open(file, 'w') as f:
    f.write(content)
