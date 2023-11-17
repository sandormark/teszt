# Alap image
FROM node:14

# Munkamappák létrehozása a konténerben
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Visszatérünk a gyökér mappába
WORKDIR /app

# Másold be a backend package.json fájlokat a konténerbe
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Másold be a frontend és a backend forrását a konténerbe
COPY frontend/ /app/frontend/
COPY backend/ /app/backend/

# Alkalmazás futtatása
CMD ["npm", "start"]
