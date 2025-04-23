FROM node:18-alpine

# Set up working dir
WORKDIR /app

# Install dependencies separately to leverage Docker caching
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose Vite dev port
EXPOSE 5173

# Default command to start dev server
CMD ["npm", "run", "dev", "--", "--host"]
