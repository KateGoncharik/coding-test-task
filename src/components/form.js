import { Component } from '../component.js';

const inputsData = [
  { name: 'org-name', placeholder: 'АВЦ', className: 'form-input' },
  { name: 'telephone', placeholder: '+7 933 848-34-33', className: 'form-input' },
  { name: 'email', placeholder: 'avc@gmail.com', className: 'form-input' },
  { name: 'sphere', placeholder: 'Экология', className: 'form-input' },
  { name: 'website', placeholder: 'avc.ru', className: 'form-input' },
  { name: 'vk', placeholder: 'vk.com/shans', className: 'form-input' },
  { name: 'ok', placeholder: 'ok.com/shans', className: 'form-input' },
  { name: 'fb', placeholder: 'facebook.com/shans', className: 'form-input' },
  { name: 'inst', placeholder: 'instagram.com/shans', className: 'form-input' },
  { name: 'youtube', placeholder: 'youtube.com/shans', className: 'form-input' },
  { name: 'leader', placeholder: 'Александров Иван Васильевич', className: 'form-input' },
];

const createInputs = () => {
  return inputsData.map((inputData) => {
    const input = new Component({ tag: 'input', className: inputData.className });
    input.setAttribute('name', inputData.name);
    input.setAttribute('placeholder', inputData.placeholder);
    return input;
  });
};

const loginButton = new Component({
  tag: 'button',
  className: 'login-button',
  text: 'login',
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

const loginInput = new Component({ tag: 'input', className: 'login-input' });
loginInput.setAttribute('name', 'login');

loginInput.setAttribute('placeholder', 'login');

export const authForm = new Component(
  { tag: 'form', className: 'auth-form' },
  ...createInputs(),
  loginButton,
  cancelButton
);
