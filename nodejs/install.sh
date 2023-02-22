#!/bin/bash
cd /home/ec2-user
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
sudo nvm install --lts
sudo nvm install 16

sudo npm init --y
sudo npm install --save mysql
sudo npm install --save express
sudo npm install --save ejs
sudo yum -y install mariadb

sudo npm install forever -g
sudo npm install forever-monitor
forever start app.js
