import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function RecipeListItemBottom({
  tags,
  calories,
}) {
  return (
    <div style={{ display: 'flex' }}>
      <Card.Text style={{ flex: 1 }}>
        {tags?.map((tag) => (
          <Badge
            variant="secondary"
            key={tag?.fields?.name}
            style={{ marginRight: '0.25rem' }}
          >
            {tag?.fields?.name}
          </Badge>
        ))}
      </Card.Text>
      <Card.Text style={{ textAlign: 'right' }}>
        <b>
          <i>
            {calories}
            {' '}
            kcal
          </i>
        </b>
      </Card.Text>
    </div>
  );
}

export default RecipeListItemBottom;
