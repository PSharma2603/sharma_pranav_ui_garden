# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /sharma_pranav_ui_garden_build_checks

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Ensure public and Storybook config directories exist before copying
RUN mkdir -p /sharma_pranav_ui_garden_build_checks/public /sharma_pranav_ui_garden_build_checks/.storybook

# Copy public folder correctly
COPY public /sharma_pranav_ui_garden_build_checks/public

# Copy Storybook configuration correctly
COPY .storybook /sharma_pranav_ui_garden_build_checks/.storybook

# Copy all remaining files
COPY . /sharma_pranav_ui_garden_build_checks/

# Verify Storybook config exists inside the container
RUN ls -la /sharma_pranav_ui_garden_build_checks/.storybook || echo "Storybook config directory not found"
RUN ls -la /sharma_pranav_ui_garden_build_checks/public || echo "Public directory not found"

# Ensure Husky, ESLint, Prettier, and Tests run before the build
RUN npx husky install
RUN npm run lint
RUN npm run format
RUN npm test

# Build the React Storybook project for production
RUN npm run build-storybook

# Expose port 6006 for Storybook inside Docker
EXPOSE 6006

# Start Storybook and bind it to 0.0.0.0 to be accessible externally
CMD ["npm", "run", "storybook", "--", "--no-open", "--port", "6006"]
