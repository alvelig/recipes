import React from 'react';
import { useAsync } from 'react-async-hook';
import RecipeListItem from './RecipeListItem';
import { getRecipes } from '../api';
import Loader from './Loader';
import Error from './Error';

function RecipeList() {
  const { loading, error, result } = useAsync(getRecipes, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <div
        style={{
          margin: '1rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '900px',
        }}
      >
        {result.items.map(recipeListItemRender)}
      </div>
    </div>
  );
}

export default RecipeList;

function recipeListItemRender(recipeEntry) {
  return (
    <RecipeListItem
      key={recipeEntry.sys.id}
      {...recipeEntry}
    />
  );
}
