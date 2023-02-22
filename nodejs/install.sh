#!/bin/bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
nvm install 16

npm init --y
npm install --save mysql
npm install --save express
sudo yum -y install mariadb

nvm install 16
node app.js
