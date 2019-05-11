import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// import Auth from '../Routes/Auth';
import Fairs from '../Routes/Fairs';
// import About from '../Routes/About';
import Template from '../Routes/Template';
// import GetInvolved from '../Routes/GetInvolved';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Fairs} />
    <Route path="/template" component={Template} />
    <Redirect from="*" to="/" />
  </Switch>
);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
