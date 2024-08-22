import { Component } from '../component.js';
import { inputsData, requiredInputsData } from './data.js';

const createInputs = () => {
  return inputsData.map((inputData) => {
    const input = new Component({ tag: 'input', className: inputData.className });
    input.setAttribute('name', inputData.name);
    input.setAttribute('type', inputData.type);
    input.setAttribute('placeholder', inputData.placeholder);
    return input;
  });
};

const createFormHeaderInputs = () => {
  const formHeaderInputsWrapper = new Component(
    { className: 'form-header-inputs-wrapper' },
    ...requiredInputsData.map((inputData) => {
      const input = new Component({ tag: 'input', className: inputData.className });
      input.setAttribute('name', inputData.name);
      input.setAttribute('placeholder', inputData.placeholder);
      return input;
    })
  );
  return formHeaderInputsWrapper;
};

const createSelect = () => {
  const economyOption = new Component({ tag: 'option', className: '', text: 'Экономика' });
  economyOption.setAttribute('value', 'Экономика');

  const ecologyOption = new Component({ tag: 'option', className: '', text: 'Экология' });
  ecologyOption.setAttribute('selected', true);
  ecologyOption.setAttribute('value', 'Экология');

  const sphereSelect = new Component({ tag: 'select', className: 'sphere-select' }, economyOption, ecologyOption);
  sphereSelect.setAttribute('name', 'sphere');
  return sphereSelect;
};

export { createFormHeaderInputs, createInputs, createSelect };
