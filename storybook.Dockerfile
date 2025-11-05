# Mulit-stage build
#   1. Build image (temporary)
#   2. Copy output from temporary image to runnable image

# Test lokalt
#   1. `docker build -f ./storybook.Dockerfile -t helsenorge/frankenstein-storybook .`
#   2. `docker run -p 8080:8080 --rm -it --name helsenorge-frankenstein-storybook helsenorge/frankenstein-storybook`
#   3. Test: http://localhost:8080/index.html

### 1. Build image (temporary) ###
FROM helsenorge.azurecr.io/dockerhub/library/node:22-alpine AS build
    WORKDIR /app
    COPY . .
    RUN npm ci && \
        npm run build-storybook -w @helsenorge/designsystem-react

### 2 Runnable image ###
FROM helsenorge.azurecr.io/helsenorge/common/static-base:master
    COPY --from=build /app/npm/designsystem/dist /app/wwwroot
    EXPOSE 8080


