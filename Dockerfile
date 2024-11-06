# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the entire app directory into the container
COPY . ./

# Install the app dependencies
RUN npm install --legacy-peer-deps

# Build the Next.js app (optional, only if needed)
RUN npm run build

# Expose the port the app will run on
EXPOSE 4200

# Run the Next.js app in production mode
CMD ["npm", "start"]
