# Multi-stage build
#   1. Bygg helsenorge.css (temporary image)
#   2. Kopier output til static asset image (samme layout som corefrontend/static: /app/wwwroot/core)

# Test lokalt (fra repo-rot)
#   docker build -f ./deploy/helsenorge-css/Dockerfile -t helsenorge/designsystem/helsenorge-css .

### 1. Build image (temporary) ###
FROM helsenorge.azurecr.io/dockerhub/library/node:26-alpine AS build
    WORKDIR /app
    ARG NPM_VERSION=11.17.0
    ENV HUSKY=0

    RUN npm i -g npm@${NPM_VERSION}

    COPY package.json package-lock.json .npmrc ./
    COPY npm/build-tools/package.json npm/build-tools/
    COPY npm/designsystem/package.json npm/designsystem/
    COPY npm/datepicker/package.json npm/datepicker/
    COPY npm/lightbox/package.json npm/lightbox/
    COPY docs/package.json docs/
    RUN npm ci --ignore-scripts

    COPY npm/designsystem/src/scss npm/designsystem/src/scss
    COPY npm/designsystem/src/fonts npm/designsystem/src/fonts
    COPY deploy/helsenorge-css deploy/helsenorge-css
    RUN npm run build --prefix deploy/helsenorge-css

### 2. Static asset image ###
FROM scratch
    COPY --from=build /app/deploy/helsenorge-css/dist /app/wwwroot/core
