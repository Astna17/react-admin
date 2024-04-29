import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider;

export const fetchPosts = async () => {
  const response = await fetch(`${dataProvider}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const createPost = async (postData: any) => {
  const response = await fetch(`${dataProvider}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
};

export const editPost = async (postData:any) => {
    const response = await fetch(`${dataProvider}/posts`, {
        method: `POST`,
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    if (!response.ok) {
        throw new Error('Failed to edit post');
    }
    return response.json();
};