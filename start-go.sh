#!/bin/bash

cd react-frontend && REACT_APP_BASE_URL=. npm run build && cp -r build ../go-backend/
cd ../go-backend && go run .