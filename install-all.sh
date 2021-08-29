#!/bin/bash

mkdir node-backend/songs

cd node-backend && npm i

cd ../react-frontend && npm i

REACT_APP_BASE_URL=/api npm run build

cp build/ ../node-backend -r
