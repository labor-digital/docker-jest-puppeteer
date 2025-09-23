FROM node:20-slim

LABEL description="Labor Digital Bitbucket Pipelines: Jest Puppeteer Environment on Node (20)"

RUN apt-get update \
  && apt-get install -y libgtk-3-0 \
  && apt-get install -y libnss3 \
  && apt-get install -y libgbm1 \
  && apt-get install -y libasound2

#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
#ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
#ENV CHROME_PATH=/usr/bin/chromium
ENV DEBIAN_FRONTEND=noninteractive

RUN apt update -qq \
    && apt install -qq -y --no-install-recommends \
      curl \
      git \
      gnupg \
      libgconf-2-4 \
      libxss1 \
      libxtst6 \
      g++ \
      build-essential \
      chromium \
      chromium-sandbox \
      dumb-init \
      fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /src/*.deb

WORKDIR /app

# Add the package.json only first
ADD app/package.json /app

# Install our npm test dependencies
RUN npm cache clean --force
RUN npm install
# Install browsers for puppeteer
#RUN ./node_modules/puppeteer/install.mjs
#RUN npx @puppeteer/browsers install chrome@stable

# Now add all the other files to improve docker layer caching
ADD app/. /app