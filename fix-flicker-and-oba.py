import glob, os, re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Fix 1: Flicker issue
    # Revert amount: 0.1 to just once: true to avoid iOS threshold bugs,
    # or use margin: "0px 0px -10% 0px" which is safer.
    # Let's just use once: true
    content = re.sub(r'viewport=\{\{ once: true, amount: 0\.1 \}\}', 'viewport={{ once: true }}', content)
    content = re.sub(r'viewport=\{\{ once: true, margin: "[^"]+" \}\}', 'viewport={{ once: true }}', content)

    # Fix 2: Inject OBA text
    if "WhyNow.tsx" in filepath:
        old_text = '바이브코딩이 빨라질수록, 외부 빌더가 쉽게 붙는 회사와 그렇지 않은 회사의 격차는 더 빠르게 벌어집니다.'
        new_text = '바이브코딩이 빨라질수록, 외부 빌더가 쉽게 붙는 회사와 그렇지 않은 회사의 격차는 더 빠르게 벌어집니다. <span className="highlight-block">OBA (Open Builders Alliance)</span>는 이 변화의 최전선에서 한국 빌더 생태계를 엽니다.'
        content = content.replace(old_text, new_text)

    if "Problems.tsx" in filepath:
        old_text = '우리는 이런 고립을 끝내기 위해 모였습니다.'
        new_text = '<span className="highlight-block">OBA (Open Builders Alliance)</span>는 이런 고립을 끝내기 위해 모였습니다.'
        content = content.replace(old_text, new_text)

    if "WhatWeDo.tsx" in filepath:
        old_text = '한국의 오픈소스와 오픈 API 확산을 위한 실질적인 행동을 만듭니다.'
        new_text = '<span className="highlight-block">OBA (Open Builders Alliance)</span>는 한국의 오픈소스와 오픈 API 확산을 위한 실질적인 행동을 만듭니다.'
        content = content.replace(old_text, new_text)

    if "WhoCanJoin.tsx" in filepath:
        old_text = '이런 분들과 함께하고 싶습니다'
        new_text = '<span className="highlight-block">OBA (Open Builders Alliance)</span>는 이런 분들과 함께하고 싶습니다'
        content = content.replace(old_text, new_text)

    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Updated {filepath}")

for file in glob.glob("src/components/*.tsx"):
    update_file(file)
