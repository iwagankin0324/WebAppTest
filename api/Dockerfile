FROM node:20.17
WORKDIR /usr/src/app
COPY ./index.js .
COPY ./package.json .
RUN npm install
EXPOSE 8000
CMD [ "node", "index.js" ]
