#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:m4rkux/spring-financial-frontend-assignment.git
git push origin gh-pages -f

cd -