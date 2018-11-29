import Products from 'page-objects/Products';

Products.open();

describe('Given the Products page is opened', () => {
  describe('when add to cart button is clicked', () => {
    beforeEach(() => {
      Products.findbuttonsAddtoCart.forEach((link) => {
        link.click();
      });
    });
    it('should add the product to the cart list', () => {
      browser.pause(2000);
      expect(Products.findPCart().getText('span')).toMatch('9');
    });
  }); 
});