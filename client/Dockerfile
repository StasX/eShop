FROM node:16-alpine3.11
WORKDIR /usr/src/app
RUN npm i -g bower
COPY . .
COPY bower.json .
COPY package.json .
COPY package-lock.json .
RUN npm i -g webpack webpack-cli
CMD ["bower","i","&&","npm","i"]

ENTRYPOINT ["npm","run","watch"]
