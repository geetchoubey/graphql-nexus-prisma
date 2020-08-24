FROM mhart/alpine-node

LABEL maintainer="Geet Chouey <geetchoubey@gmail.com>"

EXPOSE 4000

COPY . .

RUN npm ci

RUN npm run build:ci

CMD node .nexus/build/api/