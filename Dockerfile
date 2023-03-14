FROM node:14.16.0-slim

# Install extra dependencies needed via apk
RUN apk add g++ make python autoconf libpng-dev automake libtool nasm

ENV NODE_ENV=production
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR /app

COPY . ./

EXPOSE 5000

RUN npm ci --only-production
RUN npm rebuild node-sass
RUN npm run build

ENTRYPOINT npm run build && npm run start
