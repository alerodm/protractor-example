# Protractor sample project

Intended for quick PoCs with Protractor and Node, could mutate into a project scaffolder generator at some point.

* Requires Node v8+
* Angular sync is disabled by default
* Control Flow is disabled by default

### Setup
* Run `npm install` to install Node dependencies
* Run `npm run webdriver-manager:update` to setup browser webdrivers

### Local execution
* Start selenium server `npm run webdriver-manager:start`
* Run tests with `npm test`

### Chrome Headless
* Start selenium server as described above
* Run tests with `HEADLESS=true npm test`

### Saucelabs
* Export your Saucelabs username and access key to env vars `SAUCE_USER` and `SAUCE_KEY`
* Run tests with `SAUCE=true npm test`
