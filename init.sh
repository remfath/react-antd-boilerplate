#!/usr/bin/env bash

rm -rf ./node_modules
npm install
cp .env.example .env
npm start