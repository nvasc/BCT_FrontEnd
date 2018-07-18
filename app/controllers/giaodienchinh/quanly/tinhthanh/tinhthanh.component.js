import './style.css';
import tinhthanhHtml from './tinhthanh.html';
import tinhthanhController from './tinhthanh.controller';
/* @ngInject */
let tinhthanhComponent = {
  template: tinhthanhHtml,
  controllerAs: 'tinhthanh',
  controller: tinhthanhController
}
export default tinhthanhComponent;
