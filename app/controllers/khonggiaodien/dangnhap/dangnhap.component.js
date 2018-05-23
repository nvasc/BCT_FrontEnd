import './style.css';
import dangnhapHtml from './dangnhap.html';
import dangnhapController from './dangnhap.controller';
/* @ngInject */
let dangnhapComponent = {
  template: dangnhapHtml,
  controllerAs: 'dangnhap',
  controller: dangnhapController
}
export default dangnhapComponent;
