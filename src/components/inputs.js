import { Component } from '../component.js';
import { inputsData, requiredInputsData } from './data.js';

const createRequiredInputs = () => {
  const requiredInputsWrapper = new Component(
    { className: 'form-header-inputs-wrapper' },
    ...requiredInputsData.map((inputData) => {
      const input = new Component({ tag: 'input', className: inputData.className });
      input.setAttribute('name', inputData.name);
      input.setAttribute('required', true);
      input.setAttribute('placeholder', inputData.placeholder);
      return input;
    })
  );
  return requiredInputsWrapper;
};

const createUploadInput = () => {
  const uploadPhotoInput = new Component({ tag: 'input' });
  uploadPhotoInput.setAttribute('name', 'upload');
  uploadPhotoInput.setAttribute('type', 'file');
  const labelForUpload = new Component({ tag: 'label', text: 'Логотип (jpeg, png)' });
  labelForUpload.setAttribute('for', 'upload');
  return new Component({}, labelForUpload, uploadPhotoInput);
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
    const icon = new Component({ tag: 'img', className: 'input-icon' });
    icon.setAttribute('src', inputData.label);
    const input = new Component({ tag: 'input', className: 'form-input', icon });
    input.setAttribute('name', inputData.name);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', inputData.placeholder);
    const result = new Component({});

    result.append(input);
    return result;
  });
};

export { createRequiredInputs, createInputs, createSelect, createUploadInput };
