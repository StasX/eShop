FROM node:16-alpine3.11
WORKDIR /usr/src/app
COPY . .
RUN npm i -g webpack webpack-cli
RUN npm i

ENTRYPOINT [ "npm","run","watch" ]
