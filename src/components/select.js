import { Component } from '../component.js';

export const createSelect = () => {
  const economyOption = new Component({ tag: 'option', text: 'Экономика' });
  economyOption.setAttribute('value', 'Экономика');

  const ecologyOption = new Component({ tag: 'option', text: 'Экология' });
  ecologyOption.setAttribute('selected', true);
  ecologyOption.setAttribute('value', 'Экология');

  const sphereSelect = new Component({ tag: 'select', className: 'required-form-input' }, economyOption, ecologyOption);
  sphereSelect.setAttribute('name', 'sphere');

  const label = new Component(
    { tag: 'label', className: 'required-input-label' },
    new Component({ tag: 'span', className: 'red', text: '✱' }),
    new Component({ tag: 'span', className: 'input-label', text: 'Направление' })
  );
  label.setAttribute('for', 'sphere');

  return new Component({ className: 'required-input-wrapper' }, label, sphereSelect);
};
