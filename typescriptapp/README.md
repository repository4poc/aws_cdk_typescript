### Initialize nodeJS project for package.json file

    npm init

### Install typescript for tsc compiler

    npm install typescript

    npx tsc --init (Generate tsconfig.json file)

### Compile typescript

    tsc index.ts

### Run typescript

    node index.js

### Use package.json script commands

    npm run build

### To avoid compile and then run compiled files, there is one step solution ts-node package

    npm i -D ts-node

    [Development]
    npm run dev

    [Production]
    npm run build
    npm run start or npm start
