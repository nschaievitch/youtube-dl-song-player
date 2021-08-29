#!/bin/bash

#cd react-frontend && REACT_APP_BASE_URL=http://0.0.0.0:3000 npm run build && cd build && python3 -m http.server 3001
cd react-frontend && REACT_APP_BASE_URL=http://0.0.0.0:4000 npm run start &
cd go-backend && rod=show go run .
