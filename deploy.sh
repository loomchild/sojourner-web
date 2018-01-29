#!/bin/bash
set -e

STATUS="$(git status)"

if [[ $STATUS == *"nothing to commit, working tree clean"* ]]
then
    VERSION=`git describe  --long --match "[0-9].*" | sed -r --expression="s/-[0-9]+-g/-/"`
    TIMESTAMP=`date +'%Y-%m-%d %H:%M:%S'`
    sed -i "s/version: '.*'/version: '$VERSION'/" config.js
    sed -i "s/timestamp: '.*'/timestamp: '$TIMESTAMP'/" config.js
    sed -i "s|analyticsUrl: '.*'|analyticsUrl: 'https://analytics.loomchild.net/piwik.php?idsite=7\&rec=1'|" config.js

    npm run build

    sed -i '/dist/d' .gitignore

    # allow serving node_modules, see https://stackoverflow.com/a/43487798
    touch dist/.nojekyll

    git add .
    git commit -m "Deploy"
    git push origin `git subtree split --prefix dist master`:gh-pages --force
    git reset --hard HEAD^
else
    echo "Need clean working directory to deploy"
fi
