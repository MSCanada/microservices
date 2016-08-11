FROM node:0.10.38
RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
ADD serviceImpl /src/serviceImpl
ADD app.js /src/app.js
ADD cmd.sh /src/cmd.sh
RUN npm install
RUN npm i -g pm2
EXPOSE 8085
EXPOSE 3000
CMD ["./cmd.sh"]