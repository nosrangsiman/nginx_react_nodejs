FROM node:alpine3.14
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
CMD ["npm","start"]

EXPOSE 6000