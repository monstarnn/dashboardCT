# Dashboard
Dashboard on ECMAScript6 with AngularJS 1.5

#Environment setup
Before build dashboard you should pass the next steps: 
- `$ npm install -g gulp`
- `$ npm install -g bower`
- `$ npm install`
- `$ bower install`

##Build
- `gulp build` - just builds the UI app to the `./dist`
- `gulp build-watch` - builds the UI app to the `./dist` and listening for any changes in `./src`

##Run
- `gulp serve` - builds UI app to `./dist`, starts `express` server and serves to localhost with watching for changes in `./src`
- `local.build.sh` - builds UI app to `./dist` and starts `nginx` docker for `./dist` (w/o changes watching, for watching changes in `./src` run `gulp build-watch`)

##Testing
- `gulp test` - builds testing JS to `./dist/test`, starts Karma, runs the tests (single-run)
- `gulp test-debug` - builds testing JS to `./dist/test`, starts Karma, runs the tests with captured browser without exiting
- `gulp test-build` - just builds testing JS to `./dist/test`
- `karma start` - starts Karma, runs the tests with captured browser without exiting