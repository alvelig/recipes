import { createClient } from 'contentful';

export const client = createClient({
  space: 'space_id',
  accessToken: 'access_token',
});

export const getRecipes = () => client.getEntries({ content_type: 'recipe' });

export const getEntry = (id) => {
  if (id) {
    return client.getEntry(id);
  }
  return undefined;
};

export const getRecipe = async (id) => {
  const recipe = await getEntry(id);
  const chefId = recipe.fields?.chef?.sys?.id;
  const chef = await getEntry(chefId);
  return {
    ...recipe,
    fields: {
      ...recipe.fields,
      chef,
    },
  };
};
