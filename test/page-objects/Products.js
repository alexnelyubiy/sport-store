class Products {
  static open() {
    browser.url('/');
  }

  static get findbuttonsAddtoCart() {
    const links = $$('button');
    return links;
  }

  static findProduct(name) {
    return browser.element(`[data-name="${name}"]`);
  }

  static findPCart() {
    return browser.element('[data-name="header-cart"]');
  }
}

export default Products;