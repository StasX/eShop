FROM node:12
WORKDIR /usr/src/app
RUN npm i -g webpack webpack-cli bower
COPY . .
RUN bower i
RUN npm i

ENTRYPOINT ["npm","run","watch"]
