import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/widgets/Footer';
import Header from 'components/widgets/Header';
import { MasterContainer, Main } from './Master.styled'

const displayName = 'Master';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Products'
};

function Master({
  title,
  children,
  hasCart,
  itemsCount
}) {
  return (
    <Main>
      <Header title={title} hasCart={hasCart} itemsCount={itemsCount} />
        <MasterContainer>
          {children}
        </MasterContainer>
        {/* <div>
          {myProducts.map(product => (
            <Product key={product.id} {...product} onRemove={handleRemoveProduct} />
          ))}
        </div>
        <div>
          <input type="text" value={name} onChange={changeName} />
          <Button onClick={handleAddProduct}>Add Product</Button>
        </div> */}
      <Footer />
    </Main>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;
Master.defaultProps = defaultProps;

export default Master;
