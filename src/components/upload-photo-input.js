import { Component } from '../component.js';

export const createUploadInput = () => {
  const label = new Component(
    { tag: 'label', className: 'upload-label' },
    new Component({ tag: 'span', className: 'red', text: '✱' }),
    new Component({ tag: 'span', className: 'input-label', text: 'Логотип (jpeg, png)' })
  );
  label.setAttribute('for', 'upload');

  const input = new Component({ tag: 'input', className: 'upload-input' });
  input.setAttribute('name', 'upload');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', '.jpg, .jpeg, .png');
  input.addListener('change', handleUploadInputChange);

  const customUploadInput = new Component({ className: 'custom-upload-input' });

  customUploadInput.addListener('click', () => {
    input.getNode().click();
  });

  const loadedPhotoPreviewWrapper = new Component({ className: 'loaded-photo-preview-wrapper' });
  const imgToPreview = new Component({
    tag: 'img',
  });
  imgToPreview.setAttribute('src', './src/assets/img/placeholder-image.png');
  imgToPreview.setAttribute('alt', 'Preview');
  imgToPreview.setAttribute('id', 'img-to-preview');

  const uploadInputText = new Component({
    tag: 'span',
    className: 'upload-input-text',
    text: 'Выберите файл',
  });

  const clearButton = new Component({ tag: 'button', className: 'clear-button', text: '✖' });
  clearButton.addListener('click', handleClearUpload);

  loadedPhotoPreviewWrapper.append(imgToPreview);
  loadedPhotoPreviewWrapper.append(uploadInputText);
  customUploadInput.append(loadedPhotoPreviewWrapper);
  customUploadInput.append(clearButton);

  return new Component({ className: 'upload-input-wrapper' }, label, input, customUploadInput);
};

function handleUploadInputChange(event) {
  const preview = document.getElementById('img-to-preview');

  const file = event.target.files[0];

  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleClearUpload(event) {
  event.preventDefault();
  event.stopPropagation();
  const input = document.querySelector('.upload-input');
  const preview = document.getElementById('img-to-preview');
  const defaultImage = './src/assets/img/placeholder-image.png';

  input.value = '';
  preview.src = defaultImage;
}
