FROM node:14 AS builder

RUN mkdir /app && cd /app
WORKDIR /app

# compress
RUN apt update && apt install -y --no-install-recommends zopfli brotli && rm -rf /var/lib/apt/lists/*

COPY package.json /app
COPY yarn.lock /app
RUN yarn install
RUN npx browserslist@latest --update-db

# avoid copy of nginx (cannot ignore since add to nginx)
COPY src /app/src
COPY public /app/public
COPY tsconfig.json /app/tsconfig.json
COPY .eslintrc /app/.eslintrc
COPY .eslintignore /app/.eslintignore
COPY .stylelintrc /app/.stylelintrc
COPY .stylelintignore /app/.stylelintignore

# to run with direct calls
# docker build --build-arg REACT_APP_GITHUB_API=https://api.github.com .
RUN yarn run build

# compress
RUN find build -regextype posix-egrep -regex '.*(\.js|\.css|\.svg|\.webp|\.jpg|\.png|\.html)' -exec zopfli -i1000 {} \;
RUN find build -regextype posix-egrep -regex '.*(\.js|\.css|\.svg|\.webp|\.jpg|\.png|\.html)' -exec brotli --quality 10 --input {} --output {}.br \;

FROM lunaticcat/nginx-brotli:1.21.1-alpine
WORKDIR /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
