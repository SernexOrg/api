FROM node:14.5.0-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install


FROM node:14.5.0-alpine
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
RUN npm install pm2 -g
EXPOSE 80
CMD ["ts-node","src/app.ts"]
