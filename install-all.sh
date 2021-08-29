#!/bin/bash

mkdir node-backend/songs

cd node-backend && npm i

cd ../react-frontend && npm i

npm run build

cp build/ ../node-backend -r
