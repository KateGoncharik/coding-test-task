export const getPosts = async () => {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    return result.json();
  } catch (err) {
    throw new Error('Error while getting posts');
  }
};
