FROM node
WORKDIR /home/walid/Bureau/docker/Front
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [“npm”, “start”]
