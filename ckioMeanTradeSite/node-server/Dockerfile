FROM node:erbium

WORKDIR /usr/src/app

COPY ./src/package.json /usr/src/app/package.json

RUN npm install

COPY ./src/ /usr/src/app

CMD node server.js


# docker build -t mean-trade-app-node .
# docker run -d --rm --name ckioMeanTradeAppNode -p 8097:8097 -p 8098:8098 mean-trade-app-node:latest