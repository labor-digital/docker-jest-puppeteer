FROM node:20-slim

LABEL description="Labor Digital Bitbucket Pipelines: Jest Puppeteer Environment on Node (20)"

RUN apt-get update \
  && apt-get install -y libgtk-3-0 \
  && apt-get install -y libnss3 \
  && apt-get install -y libgbm1 \
  && apt-get install -y libasound2 \
  && apt-get install -y chromium

WORKDIR /app

# Add the package.json only first
ADD app/package.json /app

# Install our npm test dependencies
RUN npm cache clean --force
RUN npm install
# Install browsers for puppeteer
#RUN ./node_modules/puppeteer/install.mjs
RUN npx @puppeteer/browsers install chrome@stable

# Now add all the other files to improve docker layer caching
ADD app/. /app