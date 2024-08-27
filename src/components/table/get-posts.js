const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const getPosts = async () => {
  try {
    const result = await fetch(`${BASE_URL}posts`);
    return result.json();
  } catch (err) {
    throw new Error('Error while getting posts');
  }
};
