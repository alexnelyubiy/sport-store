import Products from 'page-objects/Products';
import Cart from 'page-objects/Cart';

Products.open();

describe('Given the Products page is opened', () => {
  describe('when add to cart button is clicked', () => {
    beforeEach(() => {
      Products.findbuttonsAddtoCart.forEach((link) => {
        link.click();
      });
      browser.pause(2000);
      Products.findPCart().click();
    });


    describe('Given the cart page is opened', () => {
      describe('when plus button is clicked', () => {
        beforeEach(() => {
          Cart.findbuttonsPlus.forEach((link) => {
            link.click();
          });
        });
        it('should add quantity 2 to product in cart', () => {
          browser.pause(13000);
          expect(Cart.findCartProductQuantity('Item 1').getText()).toMatch('2');
          expect(Cart.findCartProductQuantity('Item 2').getText()).toMatch('2');
          expect(Cart.findCartProductQuantity('Item 3').getText()).toMatch('2');
          expect(Cart.findCartProductQuantity('Item 4').getText()).toMatch('2');
        });
      });
    });
  });
});