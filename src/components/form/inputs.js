import { Component } from '../../component.js';
import { inputsData, requiredInputsData } from './data.js';
import { createSelect } from './sphere-select.js';
import { createUploadInput } from './upload-input.js';

const createRequiredInputs = () => {
  const requiredInputsLeftGroupWrapper = new Component(
    { className: 'required-inputs-group' },
    ...requiredInputsData.map((inputData) => {
      const wrapper = new Component({ className: 'required-input-wrapper' });
      const input = new Component({ tag: 'input', className: `${inputData.className}` });
      input.setAttribute('name', inputData.name);
      input.setAttribute('required', true);
      input.setAttribute('placeholder', inputData.placeholder);
      const label = new Component(
        { tag: 'label', className: 'required-input-label' },
        new Component({ tag: 'span', className: 'red', text: '✱' }),
        new Component({ tag: 'span', className: 'input-label', text: inputData.label })
      );

      wrapper.appendChildren([label, input]);
      return wrapper;
    })
  );

  return new Component(
    { className: 'form-container' },
    new Component({ className: 'required-inputs-group-wrapper' }, requiredInputsLeftGroupWrapper, createUploadInput()),
    createSelect()
  );
};

const createInputs = () => {
  return new Component(
    { className: 'not-required-inputs-wrapper' },
    ...inputsData.map((inputData) => {
      const input = new Component({ tag: 'input', className: inputData.className });
      input.setAttribute('name', inputData.name);
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', inputData.placeholder);
      return input;
    })
  );
};

export { createRequiredInputs, createInputs, createUploadInput };
