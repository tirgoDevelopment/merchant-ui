# Use an official Node.js runtime as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . .

# Build the Angular application
RUN npm run build --environment=production

# Use NGINX as the production server
FROM nginx:alpine

# Copy the built Angular app from the 'build' stage to the NGINX public directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run NGINX
CMD ["nginx", "-g", "daemon off;"]
