#!/bin/sh

cd ./.vuepress/dist/
git add .
git checkout pages
git commit -m 'update content'
git push
