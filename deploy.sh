#!/usr/bin/env sh

# abort on errors
set -e

# Remove old build dir
rm -rf dist

# build
npm run build

# navigate into the build output directory
cd dist

# deploying to a custom domain
# echo 'www.safexty.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:SAFExTY/safexty.github.io.git master

cd -
