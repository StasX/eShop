FROM node:16-alpine3.11
WORKDIR /usr/src/app
COPY . .
COPY package.json .
COPY package-lock.json .
RUN npm i -g webpack webpack-cli
CMD ["npm","i"]

ENTRYPOINT ["npm","run","watch"]
