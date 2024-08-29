import { validatePhoneNumber } from './src/components/form/validation.js';
import { createPage } from './src/main-page.js';

document.body.append(createPage().getNode());
validatePhoneNumber();
