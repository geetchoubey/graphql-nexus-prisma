FROM node

LABEL maintainer="Geet Chouey <geetchoubey@gmail.com>"
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install -g typescript

RUN npm install

EXPOSE 4000
#
COPY . .

RUN npm run generate
#
RUN tsc
#
CMD ["/app/entrypoint.sh"]