import { Component } from '../../component.js';
import { createInputs, createRequiredInputs } from './inputs.js';

const createBecomeMemberForm = () => {
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

  return new Component(
    { tag: 'form', className: 'become-member-form' },
    createRequiredInputs(),
    createInputs(),
    new Component({ className: 'buttons-wrapper' }, becomeMemberButton, cancelButton)
  );
};

export { createBecomeMemberForm };
