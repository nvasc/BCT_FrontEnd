import './style.css';
import thongtindangnhapHtml from './thongtindangnhap.html';
import thongtindangnhapController from './thongtindangnhap.controller';
/* @ngInject */
let thongtindangnhapComponent = {
  template: thongtindangnhapHtml,
  controllerAs: 'thongtindangnhap',
  controller: thongtindangnhapController
}
export default thongtindangnhapComponent;
