FROM node:17.3.0-alpine as build
WORKDIR /app
COPY RN3/backend .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
CMD ["node","app.js"]

EXPOSE 4000