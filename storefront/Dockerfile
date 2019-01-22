FROM node:8.11.2-alpine as builder
COPY . /pet-store-front
WORKDIR pet-store-front
RUN ["yarn","install"]
RUN ["npm","run", "build"]

FROM nginx:alpine
COPY nginx.conf /etc/ngnix/conf.d/default.conf
COPY --from=builder /pet-store-front/dist /usr/share/nginx/html
