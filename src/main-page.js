import { Component } from './component.js';
import { writeButton } from './components/main-page/write-button.js';
import { createModalWindow } from './components/main-page/modal.js';

export const createPage = () => {
  return new Component(
    {
      className: 'app',
    },
    new Component({ className: 'wrapper', text: 'Completed by Kate Goncharik' }, writeButton),
    createModalWindow()
  );
};
