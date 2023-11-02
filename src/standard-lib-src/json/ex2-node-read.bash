#!/bin/bash
# ref to https://www.coder.work/article/5073131
version="$(node -e "console.log(require('./jsonfile1.json')['version'])")"
echo version is $version
