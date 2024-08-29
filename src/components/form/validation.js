export const validateForm = () => {
  const indexOfFoundInput = 0;
  const orgNameInputValue = document.getElementsByName('org-name')[indexOfFoundInput].value;
  const telephoneInputValue = document.getElementsByName('telephone')[indexOfFoundInput].value;
  const emailInputValue = document.getElementsByName('email')[indexOfFoundInput].value;
  const uploadInputValue = document.getElementsByName('upload')[indexOfFoundInput].value;
  const vkInputValue = document.getElementsByName('vk')[indexOfFoundInput].value;
  const okInputValue = document.getElementsByName('ok')[indexOfFoundInput].value;
  const instInputValue = document.getElementsByName('inst')[indexOfFoundInput].value;
  const youtubeInputValue = document.getElementsByName('youtube')[indexOfFoundInput].value;
  const leaderNameInputValue = document.getElementsByName('leader-name')[indexOfFoundInput].value;

  const schemasFormValidation = {
    tel: /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/,
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)/,
    orgName: /^.{1,20}$/,
    vk: /^vk\.com\/[a-zA-Z0-9_.-]+$/,
    ok: /^ok\.com\/[a-zA-Z0-9_.-]+$/,
    fb: /^facebook\.com\/[a-zA-Z0-9_.-]+$/,
    inst: /^instagram\.com\/[a-zA-Z0-9_.-]+$/,
    youtube: /^youtube\.com\/[a-zA-Z0-9_.-]+$/,
    upload: /^.+$/,
    leader: /^.{1,40}$/,
  };
  const isEmailValid = schemasFormValidation.email.test(emailInputValue);
  const isTelephoneValid = schemasFormValidation.tel.test(telephoneInputValue);
  const isOrgNameValid = schemasFormValidation.orgName.test(orgNameInputValue);
  const isUploadValid = schemasFormValidation.upload.test(uploadInputValue);
  const isVkLinkValid = schemasFormValidation.vk.test(vkInputValue);
  const isOkLinkValid = schemasFormValidation.ok.test(okInputValue);
  const isInstLinkValid = schemasFormValidation.inst.test(instInputValue);
  const isYoutubeLinkValid = schemasFormValidation.youtube.test(youtubeInputValue);
  const isLeaderNameValid = schemasFormValidation.leader.test(leaderNameInputValue);

  const results = [
    isOrgNameValid,
    isEmailValid,
    isTelephoneValid,
    isUploadValid,
    isVkLinkValid,
    isOkLinkValid,
    isInstLinkValid,
    isYoutubeLinkValid,
  ];

  return results.every((value) => value === true);
};

export const validatePhoneNumber = () => {
  document.getElementsByName('telephone')[0].addEventListener('input', function (e) {
    let input = e.target;
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '+7 ';

    if (value.length > 1) {
      formattedValue += value.substring(1, 4);
    }
    if (value.length >= 5) {
      formattedValue += ' ' + value.substring(4, 7);
    }
    if (value.length >= 8) {
      formattedValue += '-' + value.substring(7, 9);
    }
    if (value.length >= 10) {
      formattedValue += '-' + value.substring(9, 11);
    }

    input.value = formattedValue;
  });

  document.getElementsByName('telephone')[0].addEventListener('keydown', function (e) {
    let input = e.target;

    let allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/^\d$/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }

    if (input.selectionStart === 0 && e.key === 'Backspace') {
      e.preventDefault();
    }
  });

  document.getElementsByName('telephone')[0].addEventListener('click', function (e) {
    let input = e.target;

    if (input.selectionStart < 3) {
      input.setSelectionRange(3, 3);
    }
  });
};
