import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Footer from "components/widgets/Footer";
import Header from "components/widgets/Header";
import { MasterContainer, Main } from "./Master.styled";

const displayName = "Master";

const propTypes = {
  title: PropTypes.string
};

const defaultProps = {
  title: "Products"
};

function Master({ title, children, hasCart, itemsCount }) {
  return (
    <Fragment>
      <Header title={title} hasCart={hasCart} itemsCount={itemsCount} />
      <Main>
        <MasterContainer>
          {children}
        </MasterContainer>
      </Main>
      <Footer />
    </Fragment>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;
Master.defaultProps = defaultProps;

export default Master;
