FROM node:16-alpine3.11
WORKDIR /usr/src
RUN npm i -g nodemon babel-cli
COPY src/ /app
COPY package.json .
COPY package-lock.json .
RUN npm i
EXPOSE 80
CMD [ "npm", "run", "watch" ]
