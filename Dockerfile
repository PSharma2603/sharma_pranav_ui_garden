# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Ensure public and Storybook config directories exist before copying
RUN mkdir -p /app/public /app/.storybook

# Copy public folder separately (to avoid missing files)
COPY public /app/public

# Copy .storybook folder separately (this is the fix!)
COPY .storybook /app/.storybook

# Copy all remaining files (excluding those in .dockerignore)
COPY . /app/

# Verify Storybook config exists inside the container
RUN ls -la /app/.storybook || echo "Storybook config directory not found"

# Build the React Storybook project for production
RUN npm run build-storybook

# Expose port 8083 for the component library
EXPOSE 8083

# Start Storybook
CMD ["npm", "run", "storybook", "--", "--no-open"]

