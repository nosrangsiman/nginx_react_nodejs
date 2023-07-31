FROM node
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
CMD ["npm","start"]

EXPOSE 3000