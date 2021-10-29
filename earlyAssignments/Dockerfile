# Specify base image
FROM node:alpine

# add working directory
WORKDIR /usr/app

# Install dependencies
COPY ./ ./
RUN npm install

# Run startup command
CMD ["npm", "start"]
