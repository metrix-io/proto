# metrix-io protobuf specifications

This is the central repository for all metrix-io protobuf specifications.

DO NOT USE, CHANGES MAY OCCUR WITHOUT NOTICE.

## release

To publish any changes do the following:

1. Make your changes in the `/proto` directory.
1. Run `make gen` which creates the golang and typescript stubs.
1. Commit the code to git (master branch). This makes updates automatically available for golang (no versioning for now).
1. Run the following to release javascript/typescript:
 
```
$ cd ./javascript
$ npm run build // moves, renames and generates some files
$ npm version patch // to increment the patch version.
$ npm release // push to npm
```
