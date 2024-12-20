# Use Node.js version 16
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# If you are building your code for production, uncomment the following line:
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to run the application
CMD ["node", "server.js"]
