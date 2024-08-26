export const validateForm = () => {
  const indexOfFoundInput = 0;
  const orgNameInputValue = document.getElementsByName('org-name')[indexOfFoundInput].value;
  const telephoneInputValue = document.getElementsByName('telephone')[indexOfFoundInput].value;
  const emailInputValue = document.getElementsByName('email')[indexOfFoundInput].value;
  const vkInputValue = document.getElementsByName('vk')[indexOfFoundInput].value;
  const okInputValue = document.getElementsByName('ok')[indexOfFoundInput].value;
  const instInputValue = document.getElementsByName('inst')[indexOfFoundInput].value;
  const youtubeInputValue = document.getElementsByName('youtube')[indexOfFoundInput].value;

  const schemasFormValidation = {
    tel: /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/,
    email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)/,
    orgName: /^.{1,20}$/,
    vk: /^vk\.com\/[a-zA-Z0-9_.-]+$/,
    ok: /^ok\.com\/[a-zA-Z0-9_.-]+$/,
    fb: /^facebook\.com\/[a-zA-Z0-9_.-]+$/,
    inst: /^instagram\.com\/[a-zA-Z0-9_.-]+$/,
    youtube: /^youtube\.com\/[a-zA-Z0-9_.-]+$/,
  };
  const isEmailValid = schemasFormValidation.email.test(emailInputValue);
  const isTelephoneValid = schemasFormValidation.tel.test(telephoneInputValue);
  const isOrgNameValid = schemasFormValidation.orgName.test(orgNameInputValue);
  const isVkLinkValid = schemasFormValidation.vk.test(vkInputValue);
  const isOkLinkValid = schemasFormValidation.ok.test(okInputValue);
  const isInstLinkValid = schemasFormValidation.inst.test(instInputValue);
  const isYoutubeLinkValid = schemasFormValidation.youtube.test(youtubeInputValue);

  const results = [
    isOrgNameValid,
    isEmailValid,
    isTelephoneValid,
    isVkLinkValid,
    isOkLinkValid,
    isInstLinkValid,
    isYoutubeLinkValid,
  ];

  return results.every((value) => value === true);
};
