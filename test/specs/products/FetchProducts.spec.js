import Products from 'page-objects/Products';

describe('Given the Redux page is opened', () => {
  beforeEach(() => {
    Products.open();
  });

  describe('when the Category page is loaded', () => {
    beforeEach(() => {
      browser.pause(1000);
    });

    it('should load products from backend', () => {
      browser.pause(2000);
      expect(Products.findProduct('Item 1').getText()).toMatch('Item 1');
      expect(Products.findProduct('Item 2').getText()).toMatch('Item 2');
      expect(Products.findProduct('Item 3').getText()).toMatch('Item 3');
      expect(Products.findProduct('Item 4').getText()).toMatch('Item 4');
    });
  });
});