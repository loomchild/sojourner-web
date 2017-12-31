#!/bin/bash
set -e

STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working tree clean"* ]]
then
    VERSION=`git describe  --long --match "[0-9].*"`
    TIMESTAMP=`date +'%Y-%m-%d %H:%M:%S'`
    sed -i "/version: '.*'/version: '$VERSION'/" config.js
    sed -i "/timestamp: '.*'/timestamp: '$TIMESTAMP'/" config.js
    sed -i '/dist/d' .gitignore
    git add .
    git commit -m "Deploy"
    git push origin `git subtree split --prefix dist master`:gh-pages --force
    git reset --hard HEAD^
else
    echo "Need clean working directory to deploy"
fi
