import { Component } from '../component.js';
import { createRequiredInputs, createInputs, createSelect, createUploadInput } from './inputs.js';

const becomeMemberButton = new Component({
  tag: 'button',
  className: 'become-member-button',
  text: 'Стать партнёром проекта',
});

becomeMemberButton.addListener('click', (e) => {
  e.preventDefault();
});

const cancelButton = new Component({
  tag: 'button',
  className: 'cancel-button',
  text: 'Отменить',
});

const closeModal = () => {
  const modal = document.querySelector('.dialog');
  modal.close();
};

cancelButton.addListener('click', closeModal);

export const becomeMemberForm = new Component(
  { tag: 'form', className: 'become-member-form' },
  createRequiredInputs(),
  createUploadInput(),
  createSelect(),
  ...createInputs(),
  becomeMemberButton,
  cancelButton
);
