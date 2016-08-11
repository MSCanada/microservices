FROM node:0.10.38
RUN mkdir /src
WORKDIR /src
ADD package.json /src/package.json
ADD serviceImpl /src/serviceImpl
ADD app.js /src/app.js
ADD cmd.sh /src/cmd.sh
RUN npm install
EXPOSE 3000
RUN ls ./node_modules/seneca
CMD ["./cmd.sh"]