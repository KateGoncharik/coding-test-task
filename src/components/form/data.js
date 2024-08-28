const inputsData = [
  {
    name: 'website',
    placeholder: 'avc.ru',
    label: './src/assets/icons/global.png',
    className: 'global-input',
    hint: 'Must be filled and look like that: avc.ru',
  },
  {
    name: 'vk',
    placeholder: 'vk.com/shans',
    label: './src/assets/icons/vk.png',
    className: 'vk-input',
    hint: 'Must be filled and look like that: vk.com/shans',
  },
  {
    name: 'ok',
    placeholder: 'ok.com/shans',
    label: './src/assets/icons/ok.png',
    className: 'ok-input',
    hint: 'Must be filled and look like that: ok.com/shans',
  },
  {
    name: 'fb',
    placeholder: 'facebook.com/shans',
    label: './src/assets/icons/fb.png',
    className: 'fb-input',
    hint: 'Must be filled and look like that: facebook.com/shans',
  },
  {
    name: 'inst',
    placeholder: 'instagram.com/shans',
    label: './src/assets/icons/inst.png',
    className: 'inst-input',
    hint: 'Must be filled and look like that: instagram.com/shans',
  },
  {
    name: 'youtube',
    placeholder: 'youtube.com/shans',
    label: './src/assets/icons/youtube.png',
    className: 'youtube-input',
    hint: 'Must be filled and look like that: youtube.com/shans',
  },
  {
    name: 'leader-name',
    placeholder: 'Александров Иван Васильевич',
    label: 'Руководитель',
    className: 'leader-name-input',
    hint: 'Must contain 1-20 chars',
  },
];

const requiredInputsData = [
  {
    name: 'org-name',
    placeholder: 'АВЦ',
    className: 'required-form-input',
    type: 'text',
    label: 'Название организации',
    hint: 'Must contain 1-20 chars',
  },
  {
    name: 'telephone',
    placeholder: '+7 933 848-34-33',
    className: 'required-form-input',
    type: 'tel',
    label: 'Телефон',
    hint: 'Must look like that: +7 933 848-34-33',
  },
  {
    name: 'email',
    placeholder: 'avc@gmail.com',
    className: 'required-form-input',
    type: 'email',
    label: 'E-mail',
    hint: 'Must be valid email',
  },
];

export { inputsData, requiredInputsData };
