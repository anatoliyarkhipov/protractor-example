describe('Please, click on the link', function() {
  it('should just click on the link', function() {

    const element = protractor.element(by.css('a[href="http://www.iana.org/domains/example"]'))

    return Promise.resolve()
      .then(function() { return browser.get('http://example.com'); })
      .then(function() { return browser.sleep(1000); })
      .then(function() { return console.log('before move'); })
      .then(function() { return browser.actions().mouseMove(element).perform(); })
      .then(function() { return console.log('before click'); })
      .then(function() { return browser.actions().click(element, protractor.Button.LEFT).perform(); })
      .then(function() { return console.log('after click'); })
      .then(function() { return browser.sleep(3000); })
  });
});