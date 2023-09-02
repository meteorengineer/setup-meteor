#!/bin/bash

VERSION=$(npm version patch)
git push origin $VERSION
git tag --force v1
git push --force origin v1
