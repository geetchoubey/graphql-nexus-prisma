FROM mhart/alpine-node

LABEL maintainer="Geet Chouey <geetchoubey@gmail.com>"

EXPOSE 4000

COPY . .

RUN npm ci

RUN npm run build:ci

RUN echo "DATABASE_URL=${DATABASE_URL} > .nexus/build/api/.env

CMD node .nexus/build/api/