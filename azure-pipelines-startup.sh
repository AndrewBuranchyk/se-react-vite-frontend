#!/bin/bash

# Installing the Midnight Commander
#apt-get -qy install mc

# Copying Env File
cp -f /home/site/wwwroot/azure-react-env /home/site/wwwroot/.env

cd /home/site/wwwroot/
npm install
npm run build --if-present
#npm run start

# In case of starting Vite dev server
#service nginx stop
vite --port=8080
