class Cart {
  static get findbuttonsPlus() {
    const links = $$('span[data-name="plus"]');
    return links;
  }

  static get findbuttonsMinus() {
    const links = $$('span[data-name="minus"]');

    return links;
  }

  static findCartProductQuantity(name) {
    return browser.element(`span[data-name="${name}"]`);
  }
}

export default Cart;