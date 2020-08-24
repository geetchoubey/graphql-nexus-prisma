FROM mhart/alpine-node

LABEL maintainer="Geet Chouey <geetchoubey@gmail.com>"

EXPOSE 4000

# Create and define the node_modules's cache directory.
RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package.json ./
COPY package-lock.json ./
RUN npm install

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN cp -r /usr/src/cache/node_modules/. /usr/src/app/node_modules/

RUN npm run generate

CMD npm start