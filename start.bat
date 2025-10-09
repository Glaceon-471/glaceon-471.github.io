@echo off
npx postcss ./assets/css/tailwind.before.css -o ./assets/css/tailwind.css
pause
bundle exec jekyll serve