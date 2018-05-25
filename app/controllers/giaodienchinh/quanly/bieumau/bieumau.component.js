import './style.css';
import bieumauHtml from './bieumau.html';
import bieumauController from './bieumau.controller';
/* @ngInject */
let bieumauComponent = {
  template: bieumauHtml,
  controllerAs: 'bieumau',
  controller: bieumauController
}
export default bieumauComponent;
