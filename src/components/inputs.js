import { Component } from '../component.js';
import { inputsData, requiredInputsData } from './data.js';
import { createUploadInput } from './upload-photo-input.js';

const createRequiredInputs = () => {
  const requiredInputWrapper = new Component(
    { className: 'required-inputs-left-group-wrapper' },
    ...requiredInputsData.map((inputData) => {
      const wrapper = new Component({ className: 'required-input-wrapper' });
      const input = new Component({ tag: 'input', className: `${inputData.className} required-form-input` });
      input.setAttribute('name', inputData.name);
      input.setAttribute('required', true);
      input.setAttribute('placeholder', inputData.placeholder);
      const label = new Component({ tag: 'label', className: 'form-group-label' });
      label.append(new Component({ tag: 'span', className: 'red', text: '✱' }));
      label.append(new Component({ tag: 'span', className: 'input-label', text: inputData.label }));
      wrapper.appendChildren([label, input]);
      return wrapper;
    })
  );
  requiredInputWrapper.append(createUploadInput());

  return new Component({ className: 'required-inputs-group-wrapper' }, requiredInputWrapper);
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

const createInputs = () => {
  return inputsData.map((inputData) => {
    const input = new Component({ tag: 'input', className: inputData.className });
    input.setAttribute('name', inputData.name);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', '✱');
    return input;
  });
};

export { createRequiredInputs, createInputs, createSelect, createUploadInput };
