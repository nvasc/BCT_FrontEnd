import './style.css';
import chucnangHtml from './chucnang.html';
import chucnangController from './chucnang.controller';
/* @ngInject */
let chucnangComponent = {
  template: chucnangHtml,
  controllerAs: 'chucnang',
  controller: chucnangController
}
export default chucnangComponent;
