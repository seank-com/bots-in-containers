FROM node:10.1-alpine AS base

RUN apk update && apk add --no-cache tini

ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /home/bot

FROM base AS builder

RUN apk update && apk add --no-cache \
    git \
    python \
    python-dev \
    py-pip \
    build-base \
    libc6-compat \
    && pip install virtualenv

COPY package*.json ./

RUN npm install --production

COPY *.js ./

FROM base AS release

COPY --from=builder /home/bot .

EXPOSE 3978

USER node

CMD ["npm", "start"]

FROM builder as builder-debug

RUN npm install

FROM release as debug

COPY --from=builder-debug /home/bot .

EXPOSE 3978
EXPOSE 9222

USER node

CMD ["npm", "run", "debug"]

