import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeList from './components/RecipeList';

function Routes() {
  return (
    <Switch>
      <Route path="/recipes/:id" render={() => <div>Recipe</div>} />
      <Route path="/" component={RecipeList} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
