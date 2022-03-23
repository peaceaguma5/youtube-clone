FROM node:17.7.1-alpine as build
WORKDIR /youtube-ts
COPY package.json .
RUN npm install
COPY . .
# ENV REACT_APP_YOUTUBE_API_KEY=
EXPOSE 30000
RUN npm run build

# FROM nginx
# COPY --from=build /app/build /usr/share/nginx/html
