#!/usr/bin/env bash

NODE_MODULES=./node_modules
if [ -d  "${NODE_MODULES}" ];then
    rm -rf $NODE_MODULES
fi
npm install

cp .env.example .env
npm start