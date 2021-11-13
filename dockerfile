FROM node:14.5.0-alpine
WORKDIR /usr
COPY package.json .
RUN npm install
Add . /usr 
CMD [ "npm", "start" ]
EXPOSE 7001