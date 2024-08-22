import { Component } from '../component.js';
import { createBecomeMemberForm } from './form.js';

const createModalWindow = () => {
  const authFormTitle = new Component({
    tag: 'h2',
    text: 'Стань партнёром проекта',
    className: 'become-member-form-title',
  });
  const modalContainer = new Component({ className: 'modal-container' }, authFormTitle, createBecomeMemberForm());

  return new Component({ tag: 'dialog', className: 'dialog' }, modalContainer);
};

export { createModalWindow };
