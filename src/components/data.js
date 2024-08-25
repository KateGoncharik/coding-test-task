const inputsData = [
  { name: 'website', placeholder: 'avc.ru', label: './src/assets/icons/global.png', className: 'global-input' },
  { name: 'vk', placeholder: 'vk.com/shans', label: './src/assets/icons/vk.png', className: 'vk-input' },
  { name: 'ok', placeholder: 'ok.com/shans', label: './src/assets/icons/ok.png', className: 'ok-input' },
  { name: 'fb', placeholder: 'facebook.com/shans', label: './src/assets/icons/fb.png', className: 'fb-input' },
  { name: 'inst', placeholder: 'instagram.com/shans', label: './src/assets/icons/inst.png', className: 'inst-input' },
  {
    name: 'youtube',
    placeholder: 'youtube.com/shans',
    label: './src/assets/icons/youtube.png',
    className: 'youtube-input',
  },
];

const requiredInputsData = [
  {
    name: 'org-name',
    placeholder: 'АВЦ',
    className: 'required-form-input',
    type: 'text',
    label: 'Название органицзации',
  },
  {
    name: 'telephone',
    placeholder: '+7 933 848-34-33',
    className: 'required-form-input',
    type: 'tel',
    label: 'Телефон',
  },
  { name: 'email', placeholder: 'avc@gmail.com', className: 'required-form-input', type: 'email', label: 'E-mail' },
];

export { inputsData, requiredInputsData };
