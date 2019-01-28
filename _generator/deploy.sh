#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

mv docs/.vuepress/dist/* ../

git add -A
git commit -m 'deploy by like'
git push