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

  static findHeader() {
    return browser.element('[data-name="header-cart"]');
  }

  static findCartUrl() {
    const links = $$('header a');

    return links;
  }
}

export default Products;