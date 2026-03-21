import glob, os, re

# "스크롤다운할때 페이지의 컴퍼넌트가 애니메이션 로딩된 이후에 깜빡이는 효과가 안나오게 해줘."
# The flickering in Framer Motion is often caused by negative viewports (margin: "-100px") or `amount: "some"` on mobile, 
# where elements enter and leave the viewport rapidly due to height calculations, triggering re-renders even with `once: true`.
# Also `once: true` means it animates once. But if it flickers *after* the animation is loaded, 
# it could be because `viewport` margin is confusing the layout.
# Let's remove `margin` and set `amount: 0.1` (trigger when 10% is visible).
# Or maybe the flickering is caused by CSS transition classes mixed with Framer Motion?
# `className="... transition-all ..."` mixed with `animate` or `transition={{ duration: 0.6 }}`.
# Let's look at `transition-all`.

for file in glob.glob("src/components/*.tsx"):
    with open(file, "r") as f:
        content = f.read()

    # Remove margin from viewport
    new_content = re.sub(r'viewport=\{\{ once: true, margin: "[^"]+" \}\}', 'viewport={{ once: true, amount: 0.1 }}', content)
    new_content = re.sub(r'viewport=\{\{ once: true \}\}', 'viewport={{ once: true, amount: 0.1 }}', new_content)

    if content != new_content:
        with open(file, "w") as f:
            f.write(new_content)
        print(f"Updated {file}")
