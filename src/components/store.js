export const getPosts = async () => {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    return result.json();
  } catch (err) {
    throw new Error('Error while getting posts');
  }
};

// export async function getProducts(offset = 0) {
//   const queryArgs = {
//     limit: productsPerPage,
//     offset,
//   };
//   try {
//     const request = await getApiRoot().productProjections().get({ queryArgs }).execute();
//     const products = request.body;
//     return products;
//   } catch (err) {
//     console.error(errorMessage);
//     return null;
//   }
// }
