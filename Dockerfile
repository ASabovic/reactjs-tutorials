# Stage 1: Build the React application
FROM node:lts-slim AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:mainline-alpine3.20-slim

# Copy the build output from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
EXPOSE 443

# Start Nginx
#CMD ["nginx", "-g", "daemon off;"]
