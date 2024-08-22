import { Component } from '../component.js';
import { createFormHeaderInputs, createInputs, createSelect } from './inputs.js';

const loginButton = new Component({
  tag: 'button',
  className: 'become-member-button',
  text: 'Стать партнёром проекта',
});

loginButton.addListener('click', (e) => {
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

const uploadPhotoInput = new Component({ tag: 'input' });
uploadPhotoInput.setAttribute('name', 'upload');
uploadPhotoInput.setAttribute('type', 'file');
const labelForUpload = new Component({ tag: 'label', text: 'Логотип (jpeg, png)' });
labelForUpload.setAttribute('for', 'upload');

export const becomeMemberForm = new Component(
  { tag: 'form', className: 'become-member-form' },
  createFormHeaderInputs(),
  labelForUpload,
  uploadPhotoInput,
  createSelect(),
  ...createInputs(),
  loginButton,
  cancelButton
);
