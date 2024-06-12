# Etapa 1: Construcción
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar dependencias y archivos de construcción desde la etapa anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run","dev"]

