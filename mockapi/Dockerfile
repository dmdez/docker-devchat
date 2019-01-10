FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PORT 80

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 80

CMD ["npm", "run", "start"]
