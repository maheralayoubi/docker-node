FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3000
EXPOSE $PORT
EXPOSE 3000
CMD ["npm", "run", "dev"]