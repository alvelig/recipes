import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route path="/recipes/:id" render={() => <div>Recipe page</div>} />
      <Route path="/" render={() => <div>Recipes list page</div>} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
