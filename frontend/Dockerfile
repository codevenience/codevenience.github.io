##
#  @file
#  Docker file to dockerize the Codevenience frontend project.
#
#  @copyright
#  Copyright (c) 2024, Codevenience Organization. All rights reserved.<BR>
#
#  SPDX-License-Identifier: BSD-3-Clause
#
#  @par Specification Reference:
#  - Refer: https://v2.vuejs.org/v2/cookbook/dockerize-vuejs-app
#
##

#
# Build project stage.
#
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#
# Production project stage.
#
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
