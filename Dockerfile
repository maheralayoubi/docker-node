FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
RUN if [ "$NODE_ENV" = "develpment" ] ; \
         then npm install; \
         else npm install --only=productoin; \
         fi
COPY . ./
ENV PORT 3000
EXPOSE $PORT
EXPOSE 3000
CMD ["node", "index.js"]