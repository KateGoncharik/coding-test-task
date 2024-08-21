import { Component } from '../component.js';
import { writeButton } from './button.js';
import { modal } from './modal.js';

export const createPage = () => {
  return new Component(
    {
      className: 'app',
    },
    new Component({ className: 'wrapper', text: 'wrapper' }, writeButton),
    modal
  );
};
