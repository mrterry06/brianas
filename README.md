[![CircleCI](https://circleci.com/gh/r-park/react-redux-seed.svg?style=shield&circle-token=4f1796f8ed635f0274bb5a0d10d065cc97e1756c)](https://circleci.com/gh/r-park/react-redux-seed)


# React Redux Seed

- react
- react-hot-loader `3.0.0-beta.2`
- react-redux
- react-router
- react-router-redux
- redux
- redux-thunk
- babel
- eS6
- jasmine
- karma
- sass
- webpack
- webpack-dev-server


Getting Started
---------------

#### Prerequisites
Node `>=5.11`

#### Installing dependencies
```shell
$ npm install
```


Usage
-----

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run dev`|Same as `npm start`|
|`npm run lint`|Lint the application using eslint|
|`npm run server`|Start express server @ `localhost:3000` to serve built artifacts from `./target` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
|`npm version`|Bump package.json version, generate CHANGELOG.md, git commit and tag (see [npm version](https://docs.npmjs.com/cli/version))|
