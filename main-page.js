import { Component } from './component.js';
import { getPosts } from './src/components/store.js';
import { generateTable } from './src/components/table/table.js';

export const createPage = () => {
  getPosts().then((data) => {
    generateTable(data);
  });

  return new Component(
    {
      className: 'app',
    },
    new Component({ className: 'wrapper', text: 'Completed by Kate Goncharik' })
  );
};
