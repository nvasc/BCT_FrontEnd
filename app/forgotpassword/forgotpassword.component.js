import './style.css';
import forgotpasswordHtml from './forgotpassword.html';
import forgotpasswordController from './forgotpassword.controller';
/* @ngInject */
let forgotpasswordComponent = {
  template: forgotpasswordHtml,
  controllerAs: 'forgotpassword',
  controller: forgotpasswordController
}
export default forgotpasswordComponent;
