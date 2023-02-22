#!/bin/bash
cd /home/ec2-user
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
nvm install 16

npm init --y
npm install --save mysql
npm install --save express
npm install --save ejs
sudo yum -y install mariadb

npm install forever -g
npm install forever-monitor
cd simplilearn/nodejs
forever start app.js
