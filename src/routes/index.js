import React from "react";
import { Route } from "react-router-dom";
import App from "App";
import ProductsContainer from "scenes/ProductsScene";
import CardContainer from "scenes/CardScene";
import ConfirmContainer from "scenes/ConfirmScene";

const Routes = ({ theme }) => (
    <App theme={theme} >
        <Route 
          path="/" 
          component={ProductsContainer} 
          exact>
        </Route>
        <Route 
          path="/cart" 
          component={CardContainer} 
          exact>
        </Route>
        <Route 
          path="/confirmation" 
          component={ConfirmContainer} 
          exact>
        </Route>
    </App>
);

export default Routes