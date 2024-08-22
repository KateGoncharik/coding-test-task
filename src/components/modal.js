import { Component } from '../component.js';
import { becomeMemberForm } from './form.js';

const authFormTitle = new Component({
  tag: 'h2',
  text: 'Стань партнёром проекта',
  className: 'become-membre-form-title',
});
const modalContainer = new Component({ className: 'modal-container' }, authFormTitle, becomeMemberForm);

const modal = new Component({ tag: 'dialog', className: 'dialog' }, modalContainer);

export { modal };
