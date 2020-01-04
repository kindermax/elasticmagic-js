FROM node:12-alpine

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR /

RUN apk add bash curl

COPY package.json /package.json

RUN npm install