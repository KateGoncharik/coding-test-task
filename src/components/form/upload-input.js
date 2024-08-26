import { Component } from '../../component.js';

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
  input.setAttribute('required', true);
  input.setAttribute('accept', '.jpg, .jpeg, .png');
  input.addListener('change', handleUploadInputChange);

  const customUploadInput = new Component({ className: 'custom-upload-input' });

  customUploadInput.addListener('click', () => {
    input.getNode().click();
  });

  const loadedPhotoPreviewWrapper = new Component({ className: 'loaded-photo-preview-wrapper' });
  const imgToPreview = new Component({
    tag: 'img',
    className: 'preview-image',
  });
  imgToPreview.setAttribute('src', './src/assets/img/placeholder-image.png');
  imgToPreview.setAttribute('alt', 'Preview');

  const uploadIcon = new Component({
    tag: 'img',
  });
  uploadIcon.setAttribute('src', './src/assets/icons/upload.png');
  uploadIcon.setAttribute('alt', 'Upload Icon');
  uploadIcon.setAttribute('class', 'upload-icon');

  const uploadInputText = new Component(
    {
      tag: 'span',
      className: 'upload-input-text',
    },
    uploadIcon,
    new Component({ tag: 'span', text: 'Выберите файл' })
  );

  const clearButton = new Component({ tag: 'button', className: 'clear-button', text: '✖' });
  clearButton.addListener('click', handleClearUpload);

  loadedPhotoPreviewWrapper.append(imgToPreview);
  loadedPhotoPreviewWrapper.append(uploadInputText);
  customUploadInput.append(loadedPhotoPreviewWrapper);
  customUploadInput.append(clearButton);

  const hint = new Component({ className: 'img-hint hide', text: 'Format must be jpg, jpeg or png' });

  return new Component({ className: 'upload-input-wrapper' }, label, input, customUploadInput, hint);
};

function handleUploadInputChange(event) {
  const preview = document.querySelector('.preview-image');
  const hint = document.querySelector('.img-hint'); ///

  const indexOfSelectedFile = 0;
  const file = event.target.files[indexOfSelectedFile];

  if (!file) {
    return;
  }

  const allowedFormats = ['image/jpeg', 'image/png'];
  if (!allowedFormats.includes(file.type)) {
    hint.classList.remove('hide');
    preview.src = './src/assets/img/placeholder-image.png';
    return;
  }

  hint.classList.add('hide');

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
  const preview = document.querySelector('.preview-image');
  const defaultImage = './src/assets/img/placeholder-image.png';

  input.value = '';
  preview.src = defaultImage;
}
