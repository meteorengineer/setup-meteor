#!/bin/bash

npm ci
NODE_OPTIONS=--openssl-legacy-provider npm run build
git add dist
git commit -m "npm run build"
git push origin master

VERSION=$(npm version patch)
git push origin $VERSION
git tag --force v1
git push --force origin v1
