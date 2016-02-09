# BuildTemplate
A Node application, deployed with NW.js, build environment template.

This template seperates the build environment and the application, which makes it easy to deploy the application with tools like NW.JS.

Usage
-----

To execute:
1. Open a terminal/command window in the root directory
2. Run `npm install`, which downloads all the build environment dependencies
3. Run `grunt`, which does an `npm install` in the `src` directory, runs tests and finally builds a deployment stored in the `bin` directory

Fork, edit, enjoy.