# base image
FROM node:12.19.0-alpine3.10

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

RUN curl https://intoli.com/install-google-chrome.sh | bash

# copy source files
COPY . /usr/src


# install dependencies
RUN npm install

ENV NEXT_PUBLIC_STORYBLOK_TOKEN=06ZZrAVvc9xHEn5MYxhSBgtt

# start app
EXPOSE 6006
CMD npm run start