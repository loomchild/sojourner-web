#!/bin/bash
set -e

STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working tree clean"* ]]
then
    sed -i '/dist/d' .gitignore
    git add .
    git commit -m "Deploy"
    git push origin `git subtree split --prefix dist master`:gh-pages --force
    git reset --hard HEAD^
else
    echo "Need clean working directory to deploy"
fi
