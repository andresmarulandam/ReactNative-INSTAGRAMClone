# INSTALACION:

1. npx create-expo-app@latest ./ --template
2. Select blank typescript
3. npm start
4. Scan QR with Expo App

# First commit:

1. git init
2. git branch -M main
3. git remote add origin git@github.com:andresmarulandam/ReactNative-INSTAGRAMClone.git
4. git add .
5. git commit -m "first commit"
6. git push -u origin main

# Expo Router

1. npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
2. In package.json: Setup entry point: "main": "expo-router/entry"
3. In app.json: Add schema: "schema":"igSchema",
4. If you are developing your app for web, install the following dependencies:npx expo install react-native-web react-dom
5. In app.json: "web": {
   "bundler": "metro"
   }

6. Second commit: Expo Router Config

# Folders and HomeScreen

1. Create a main folder: /src
2. Inside /scr create /app / components
3. Inside /app create index.tsx

# RootLayout

1. En /app crear un archivo llamado /\_layout.tsx
2. GROUPS: This is useful for adding layouts without adding additional segments to the URL.
   You can prevent a segment from showing in the URL by using the group syntax ().

app/root/home.tsx matches /root/home
app/(root)/home.tsx matches /home

- Dentro de /app crear una carpeta (tabs) y dentro crear /\_layout.tsx, index.tsx, profile.tsx, new.tsx
- En \_layout.tsx irán las opciones de pantallas que queremos, en este caso será index, profile y new
- Para los iconos de cada opción de navegación usaremos expo vector icons
- En layout irán las configuraciones para index, profile, new. como el color, el tamaño, los iconos, etc

3. commit: Setup Tabs Navigation Structure

# Nativewind: https://www.nativewind.dev/v4/getting-started/expo-router

1. Seleccionar para Expo y copiar el codigo de instalación:
   npx expo install nativewind@^4.0.1 react-native-reanimated tailwindcss
2. npx tailwindcss init: esto creará un archivo llamado tailwind.config.js, copiar la configuración que sale en la pagina y apuntar a /src si se creó todo adentro de esa carpeta como en este caso.
3. Create a CSS file and add the Tailwind directives
4. Add the Babel preset, in this case SDK 50+
5. Crear un metro.congif.js con el comando npx expo customize metro.config.js y añadir la configuración que falte.
6. En el RootLayout // Import your global CSS file
   import "../global.css"
7. SOLO PARA TYPESCRIPT: crear en la raiz un archivo llamado nativewind-env.d.ts y en ese archivo pegar: /// <reference types="nativewind/types" />
8. En consola: reiniciar el servidor y npm start -- -c
9. Probar que tailwind este bien instalado y funcionando agregando algun estilo de tailwind

10. COMMIT: Add and setup nativewind
