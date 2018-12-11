import React from 'react';
import { shallow } from 'enzyme';
import CardScene from './CardScene';

const testProps = {
  handleSubmit: jest.fn(),
  cartProducts: [{name: "Item 1", price: 290}, {name: "Item 2", price: 20}],
  isCart: true,
  pricesSum: 310
}
describe('Given the CardScene component', () => {
  describe('when the component is rendered', () => {
    let component;
  
    beforeEach(() => {
			component = shallow(<CardScene { ...testProps } />);
		});
  
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
    describe('and cartProducts is empty', () => {
			beforeAll(() => {
				testProps.cartProducts = [];
			});

			it('should match the snapshot with emty cart', () => {
				expect(component).toMatchSnapshot();
			});
		});
  });
});
//

