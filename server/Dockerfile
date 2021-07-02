FROM node:16-alpine3.11
WORKDIR /usr/src/app/
RUN npm i -g nodemon babel-cli
COPY src/ .
COPY package.json .
COPY package-lock.json .
RUN npm i
EXPOSE 80
ENTRYPOINT [ "npm", "run", "watch" ]
