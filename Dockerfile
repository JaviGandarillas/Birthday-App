# Usamos una imagen base de Node.js para construir la aplicación
FROM node:14 as builder

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo 'package.json' y 'package-lock.json' para instalar dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de la aplicación
COPY . .

# Compilamos la aplicación (esto puede variar dependiendo de tu proyecto)
RUN npm run build

# Etapa final para el servidor web
FROM nginx:alpine

# Copiamos los archivos generados en la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# El contenedor Nginx por defecto expone el puerto 80, así que no es necesario especificarlo aquí

# Esto es opcional, pero puedes agregar configuraciones de Nginx si es necesario
# COPY nginx.conf /etc/nginx/nginx.conf
