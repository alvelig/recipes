## Project requirements

- Recipe 

## Project architecture

- Backend:
  - ReactAppController (Rails)
    Serves as a server-side rendering server (this helps improving SEO as we need to promote our recipes' page in search engines)
  - ContentfulApiController (Grape)
    Serves as a middleware for the Contentful api (in case we need to put )
- Frontend Application (React)
  For speeding up development process the react app by default is in Hot Module Replacement (HMR) mode. It conflicts with the server-side rendering (SSR) and SSR actually is not needed in the development process, so it is disabled by setting SSR=0 environment variable. To check SSR just run the rails server without HMR: `bundle exec rails s`
  - react-router-dom
  - react-async-hook
  - react-markdown
  
- Testing:
  - Rspec: testing Rails business logic
  - Cypress: e2e integration testing

## Prerequisites

Ruby environment:
```
ruby 2.7
bundler # gem install bundler:2.2.19
rails # included in Gem file
foreman # included in Gem file
```

Kind suggestion to use [rbenv](https://github.com/rbenv)
```
rbenv install 2.7.3
```

JS environment
```
node 8+
yarn
```

## Getting started

```
cp sample.env .env
```
Fill it with your SpaceID and AccessToken


Get npm dependencies:
```
yarn install
```

Get gems:
```
bundle install
```

Start development server:
```
yarn start
```

Open: [http://localhost:3000/](http://localhost:3000/)

## Testing

Run all tests:
```
yarn test
```
Specific tests commands you can see in the package.json file.

**ATTENTION:** before running Cypress tests please run `yarn start` to make the application available for e2e testing.

## Linting

```
yarn lint
```
Rubocop analyses ruby files
Eslint and prettier serve for javascript files enforcing styles and finding possible problems
