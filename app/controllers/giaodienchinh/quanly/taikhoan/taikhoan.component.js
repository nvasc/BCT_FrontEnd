import './style.css';
import taikhoanHtml from './taikhoan.html';
import taikhoanController from './taikhoan.controller';
/* @ngInject */
let taikhoanComponent = {
  template: taikhoanHtml,
  controllerAs: 'taikhoan',
  controller: taikhoanController
}
export default taikhoanComponent;
