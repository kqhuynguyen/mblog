FROM node:21-alpine3.17
WORKDIR /app/
COPY . /app/
RUN yarn install
CMD ["yarn", "start"]
