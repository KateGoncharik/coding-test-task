import { Component } from '../../component.js';
import { createInputs, createRequiredInputs } from './inputs.js';
import { validateForm } from './validation.js';

const createBecomeMemberForm = () => {
  const becomeMemberButton = new Component({
    tag: 'button',
    className: 'become-member-button',
    text: 'Стать партнёром проекта',
  });
  becomeMemberButton.setAttribute('type', 'submit');

  becomeMemberButton.addListener('click', (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.error('Invalid data');
      const hints = document.querySelectorAll('.hint');
      hints.forEach((hint) => {
        hint.classList.remove('hide');
        hint.classList.add('show');
      });
      return;
    }
    const hints = document.querySelectorAll('.hint');
    hints.forEach((hint) => {
      hint.classList.remove('show');
      hint.classList.add('hide');
    });
    console.log('Successfully submitted!');
  });

  const cancelButton = new Component({
    tag: 'button',
    className: 'cancel-button',
    text: 'Отменить',
  });
  cancelButton.setAttribute('type', 'button');

  const closeModal = () => {
    const modal = document.querySelector('.dialog');
    modal.close();
  };

  cancelButton.addListener('click', closeModal);
  const form = new Component(
    { tag: 'form', className: 'become-member-form' },
    createRequiredInputs(),
    createInputs(),
    new Component({ className: 'buttons-wrapper' }, becomeMemberButton, cancelButton)
  );
  return form;
};

export { createBecomeMemberForm };
