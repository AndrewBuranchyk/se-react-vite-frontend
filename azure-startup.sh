#!/bin/bash

# Installing the Midnight Commander
apt-get -qy install mc

# Copying the repository files to wwwroot
cp -Rf /home/site/repository/. /home/site/wwwroot/

# Copying Env File
cp -f /home/site/wwwroot/azure-react-env /home/site/wwwroot/.env

# shellcheck disable=SC2164
cd /home/site/wwwroot/
npm install --quiet
#npm run build --if-present

# In case of starting Vite dev server
#service nginx stop
vite --port=8080
