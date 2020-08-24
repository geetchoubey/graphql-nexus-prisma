FROM mhart/alpine-node

LABEL maintainer="Geet Chouey <geetchoubey@gmail.com>"

EXPOSE 4000

COPY . .

RUN cd $(npm root -g)/npm \
 && npm i fs-extra \
 && npm install

RUN npm run generate

CMD npm start