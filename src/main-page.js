import { Component } from './component.js';
import { writeButton } from './components/button.js';
import { createModalWindow } from './components/modal.js';

export const createPage = () => {
  return new Component(
    {
      className: 'app',
    },
    new Component({ className: 'wrapper' }, writeButton),
    createModalWindow()
  );
};
