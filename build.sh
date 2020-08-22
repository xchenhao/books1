#!/bin/sh

sudo rm -rf ./docs/*
sudo vuepress build ./articles -d ./docs
cp CNAME ./docs
