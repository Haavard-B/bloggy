# bloggy

## todo
- Lage en slags 'list of important people' som f.eks Mary popendieck

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
# set NODE_OPTIONS=--openssl-legacy-provider

#on ubuntu i had to use this
$ export NODE_OPTIONS=--openssl-legacy-provider && npm run dev
# another solution is to downgrade to 16.x (for example v16.13.1)
```

## run production environment locally

```bash
npm install --global http-server
# generate static project
npm run generate && http-server dist/
```

# build for production and launch server

$ npm run build
$ npm run start
