import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "App";
import ProductsContainer from "scenes/ProductsScene";
import CardContainer from "scenes/CardScene";
import ConfirmContainer from "scenes/ConfirmScene";

const Routes = ({ theme }) => (
    <App theme={theme} >
      <BrowserRouter>
        <Switch>
          <Route 
            path="/" 
            component={ProductsContainer} 
            exact>
          </Route>
          <Route 
            path="/cart" 
            component={CardContainer} 
            >
          </Route>
          <Route 
            path="/confirmation" 
            component={ConfirmContainer} 
           >
          </Route>
        </Switch>
      </BrowserRouter>
    </App>
);

export default Routes