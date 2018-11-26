import React from 'react';
import { shallow } from 'enzyme';
import ProductScene from './ProductsScene';

const testProps = {
  products: [{ name: 'Item 1', price: 290, id: 1 }, { name: 'Item 2', price: 20, id: 2 }],
  cartProducts: [{ name: 'Item 1', price: 290, id: 1 }, { name: 'Item 2', price: 20, id: 2 }],
};
describe('Given the ProductScene component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeEach(() => {
      component = shallow(<ProductScene {...testProps} />);
    });

    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
//
