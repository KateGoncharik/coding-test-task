import { Component } from '../component.js';
import { authForm } from './form.js';

const authFormTitle = new Component({ tag: 'h2', text: 'assa', className: 'auth-form-title' });
const modalContainer = new Component({ className: 'modal-container' }, authFormTitle, authForm);

const modal = new Component({ tag: 'dialog', className: 'dialog' }, modalContainer);

export { modal };
