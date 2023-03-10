#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. /.nvm/nvm.sh
nvm install --lts
nvm install 16
npm init --y
npm install --save mysql
npm install --save express
npm install --save ejs
npm install forever -g
npm install forever-monitor
forever start app.js
