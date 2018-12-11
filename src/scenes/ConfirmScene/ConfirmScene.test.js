import React from 'react';
import { shallow } from 'enzyme';
import ConfirmScene from './ConfirmScene';

const testProps = {
  cartProducts: [{name: "Item 1", price: 290, id: 1}, {name: "Item 2", price: 20, id: 2}],
  pricesSum: 310,
  isCart: true,
  handleResetCart: jest.fn(),
  handleConfirm: jest.fn(),
  isConfirm: false,
  prices: {1: 290, 2: 20}
}
describe('Given the ConfirmScene component', () => {
  describe('when the component is rendered', () => {
    let component;
  
    beforeEach(() => {
			component = shallow(<ConfirmScene { ...testProps } />);
		});
  
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
    describe('and ConfirmScene is confirm', () => {
			beforeAll(() => {
				testProps.isConfirm = true;
			});

			it('should match the snapshot with emty cart', () => {
				expect(component).toMatchSnapshot();
			});
		});
  });
});
//

