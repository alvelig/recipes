import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';

function Routes() {
  return (
    <Switch>
      <Route path="/recipe/:recipe" component={Recipe} />
      <Route exact path="/" component={RecipeList} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
