#!/usr/bin/env sh

# abort on errors
set -e

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
