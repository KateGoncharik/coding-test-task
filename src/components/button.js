import { Component } from '../component.js';

export const writeButton = new Component({
  tag: 'button',
  className: 'write-button',
  text: 'Написать',
});

const showModal = () => {
  const modal = document.querySelector('.dialog');
  modal.showModal();
};

writeButton.addListener('click', showModal);
