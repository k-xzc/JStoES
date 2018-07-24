FROM node:8.4.0-alpine
WORKDIR /root
COPY . /root
RUN npm install
CMD node app/index.js 
