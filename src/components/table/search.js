import { Component } from '../../../component.js';
import { getPosts } from './get-posts.js';
import { renderTableData } from './table.js';

export const createSearch = () => {
  const searchInput = new Component({ tag: 'input', className: 'search-input' });
  const searchButton = new Component({ tag: 'button', className: 'search-button', text: 'Search' });
  searchButton.addListener('click', () => {
    const input = document.querySelector('.search-input');
    if (!input) {
      throw new Error('Input expected');
    }
    searchInTable(input.value);
  });
  const searchWrapper = new Component({ className: 'search-wrapper' }, searchInput, searchButton);
  return searchWrapper;
};

const searchInTable = (searchKey) => {
  getPosts().then((posts) => {
    const sortedPosts = posts.filter((post) => {
      for (const prop in post) {
        const isPostIncludesSearchKey = `${post[prop]}`.includes(searchKey);
        if (isPostIncludesSearchKey) {
          return true;
        }
      }
      return false;
    });
    renderTableData(sortedPosts);
  });
};
