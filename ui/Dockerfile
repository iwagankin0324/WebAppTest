FROM node:20.17

WORKDIR /app

COPY ./nextjs-project .

RUN npm install
RUN npm run build

CMD ["npm", "start"]
