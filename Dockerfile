FROM node:14.15.1-slim
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
CMD ["npm", "start"]