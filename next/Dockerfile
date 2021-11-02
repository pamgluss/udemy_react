# Specify base image
FROM node:14.18.1-alpine3.12

# add working directory
WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install

COPY ./ ./
RUN npm run-script build

# Run startup command
CMD ["npm", "start"]
