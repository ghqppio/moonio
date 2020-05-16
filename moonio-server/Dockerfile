FROM node:current-alpine

RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY . .

RUN yarn

CMD ["yarn", "start"]
