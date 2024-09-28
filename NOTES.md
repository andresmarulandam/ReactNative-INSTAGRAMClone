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
