import { Component } from '../../component.js';
import { createLabel } from './inputs.js';

export const createSelect = () => {
  const economyOption = new Component({ tag: 'option', text: 'Экономика' });
  economyOption.setAttribute('value', 'Экономика');

  const ecologyOption = new Component({ tag: 'option', text: 'Экология' });
  ecologyOption.setAttribute('selected', true);
  ecologyOption.setAttribute('value', 'Экология');

  const sphereSelect = new Component({ tag: 'select', className: 'required-form-input' }, economyOption, ecologyOption);
  sphereSelect.setAttribute('name', 'sphere');
  sphereSelect.setAttribute('required', true);

  const label = createLabel(true, 'Направление')
 
  label.setAttribute('for', 'sphere');

  return new Component({ className: 'required-input-wrapper' }, label, sphereSelect);
};
