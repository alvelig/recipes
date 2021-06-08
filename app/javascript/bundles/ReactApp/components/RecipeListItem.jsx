import React from 'react';
import Card from 'react-bootstrap/Card';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import RecipeListItemBottom from './RecipeListItemBottom';

function RecipeListItem(recipeEntry) {
  if (!recipeEntry) {
    return null;
  }

  const id = recipeEntry.sys?.id;
  const {
    calories,
    photo,
    title,
    tags,
  } = recipeEntry.fields || {};

  return (
    <Link
      to={`/recipe/${id}`}
      style={{
        display: 'flex',
        flex: 1,
        maxWidth: '600px',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        minWidth: '300px',
      }}
    >
      <Card style={{ flex: 1 }}>
        <Card.Img variant="top" src={photo?.fields?.file?.url} />
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ flex: 1 }}>
            <Card.Title>
              <LinesEllipsis text={title} maxLine={2} />
            </Card.Title>
          </div>
          <RecipeListItemBottom tags={tags} calories={calories} />
        </Card.Body>
      </Card>
    </Link>
  );
}

export default RecipeListItem;
