FROM mhart/alpine-node

LABEL maintainer="Geet Chouey <geetchoubey@gmail.com>"

EXPOSE 4000

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD npm start