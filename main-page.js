import { Component } from './component.js';
import { getPosts } from './src/components/table/get-posts.js';
import { createTable } from './src/components/table/table.js';

export const createMainPage = () => {
  getPosts().then((data) => {
    createTable(data);
  });

  return new Component(
    {
      className: 'app',
    },
    new Component({ className: 'wrapper', text: 'Completed by Kate Goncharik' })
  );
};
