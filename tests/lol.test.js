describe('Please, click on the link', function() {
  it('should just click on the link', function() {
    browser.get('http://example.com');

    const element = protractor.element(by.css('a[href="http://www.iana.org/domains/example"]'))

    browser.sleep(1000)

    console.log('before move')
    browser.actions().mouseMove(element).perform();
    console.log('before click')
    browser.actions().click(element, protractor.Button.LEFT).perform();
    console.log('after click')

    browser.sleep(3000)
  });
});