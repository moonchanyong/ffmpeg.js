FROM node:12.4.0

WORKDIR home/node/
CMD [ "mkdir", "app"]
COPY . home/node/app/

WORKDIR home/node/app
CMD [ "npm", "i"]
EXPOSE 80
ENTRYPOINT [ "npm", "start" ]