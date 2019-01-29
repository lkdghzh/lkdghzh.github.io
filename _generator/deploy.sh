#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

cp -R docs/.vuepress/dist/* ../ 

cd ../

# git 
echo 'git start'
git config user.name lkdghzh
git config user.email likesite@foxmail.com
git add .
git commit -m '生成文件'
git push
echo 'git end'
