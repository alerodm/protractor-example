const { SpecReporter } = require('jasmine-spec-reporter');
const capabilities = require('./capabilities');
const suites = require('./suites');

function isSauceEnabled() {
  return process.env.SAUCE === 'true';
}

// config reference: https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
  seleniumAddress: isSauceEnabled() ? undefined : 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  suites,
  capabilities,

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    displaySpecDuration: true,
  },

  // Saucelabs support
  sauceUser: isSauceEnabled() ? process.env.SAUCE_USER : undefined,
  sauceKey: isSauceEnabled() ? process.env.SAUCE_KEY : undefined,

  onPrepare: () => {
    browser.ignoreSynchronization = true; // for non-angular projects
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true,
      },
    }));
  },
};
