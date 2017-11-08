exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['lol.test.js'],

  // SELENIUM_PROMISE_MANAGER: false,

  onPrepare: function() {
    browser.ignoreSynchronization = true
  }
};