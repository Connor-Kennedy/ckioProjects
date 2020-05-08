FROM node:erbium

WORKDIR /usr/src/app

COPY ./src/package.json /usr/src/app/package.json

RUN npm install

COPY ./src/ /usr/src/app

CMD node server.js