import './style.css';
import loginHtml from './login.html';
import loginController from './login.controller';
/* @ngInject */
let loginComponent = {
  template: loginHtml,
  controllerAs: 'login',
  controller: loginController
}
export default loginComponent;
