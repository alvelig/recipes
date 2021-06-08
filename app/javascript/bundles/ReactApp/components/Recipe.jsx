import React from 'react';
import { useAsync } from 'react-async-hook';
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ReactMarkdown from 'react-markdown';
import { getEntry } from '../api';

function Recipe({ match }) {
  const recipeId = match?.params?.recipe;
  const { loading, result } = useAsync(getEntry, [recipeId]);

  if (loading) {
    return <div>loading</div>;
  }

  const {
    calories,
    photo,
    title,
    tags,
    chef,
    description,
  } = result.fields || {};

  const chefName = chef?.fields?.name;

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem',
    }}
    >
      <Card style={{ flex: 1, maxWidth: 600, position: 'relative' }}>
        {!chefName ? null : (
          <h1 style={{ position: 'absolute', right: 20, top: 20 }}>
            <Badge variant="primary">
              By
              {chefName}
            </Badge>
          </h1>
        )}
        <Card.Img variant="top" src={photo?.fields?.file?.url} />
        <Card.Body style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        >
          <Card.Title>{title}</Card.Title>
          <ReactMarkdown>{description}</ReactMarkdown>
          <div style={{ display: 'flex' }}>
            <Card.Text style={{ flex: 1 }}>{tags?.map((tag) => <Badge key={tag?.fields?.name} style={{ marginRight: '0.25rem' }} variant="secondary">{tag?.fields?.name}</Badge>)}</Card.Text>
            <Card.Text style={{ textAlign: 'right' }}>
              <b>
                <i>
                  {calories}
                  {' '}
                  cals
                </i>
              </b>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Recipe;
