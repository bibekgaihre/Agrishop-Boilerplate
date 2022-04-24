#build 
FROM node:16-alpine

WORKDIR /usr/app

COPY package*.json ./

COPY tsconfig*.json ./

RUN npm install

COPY . .

RUN npm run build
COPY .env ./build/
WORKDIR ./build

EXPOSE 3000

CMD node index.js







