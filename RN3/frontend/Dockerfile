FROM node:17.3.0-alpine as build
WORKDIR /app
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python && python3 -m ensurepip && pip3 install --no-cache --upgrade pip setuptools
RUN apk add make g++
RUN apk add openjdk11
COPY RN3/frontend .
RUN npm ci --verbose
CMD ["npm","start"]

EXPOSE 3000
##comment