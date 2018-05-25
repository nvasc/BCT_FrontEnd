import './style.css';
import phanquyenHtml from './phanquyen.html';
import phanquyenController from './phanquyen.controller';
/* @ngInject */
let phanquyenComponent = {
  template: phanquyenHtml,
  controllerAs: 'phanquyen',
  controller: phanquyenController
}
export default phanquyenComponent;
