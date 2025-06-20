FROM node:22-alpine
WORKDIR /app
COPY . .
EXPOSE 8080
RUN npm install
CMD ["node", "."]