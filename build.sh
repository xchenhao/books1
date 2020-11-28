#!/bin/sh

#sudo rm -rf ./docs/*
#sudo vuepress build ./articles -d ./docs
#cp CNAME ./docs

rm -rf ./docs/*
vuepress build ./articles -d ./docs
cp -r others/* ./docs
