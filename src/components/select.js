import { Component } from '../component.js';

export const createSelect = () => {
  const economyOption = new Component({ tag: 'option', className: '', text: 'Экономика' });
  economyOption.setAttribute('value', 'Экономика');

  const ecologyOption = new Component({ tag: 'option', className: '', text: 'Экология' });
  ecologyOption.setAttribute('selected', true);
  ecologyOption.setAttribute('value', 'Экология');

  const sphereSelect = new Component({ tag: 'select', className: 'sphere-select' }, economyOption, ecologyOption);
  sphereSelect.setAttribute('name', 'sphere');
  return sphereSelect;
};
