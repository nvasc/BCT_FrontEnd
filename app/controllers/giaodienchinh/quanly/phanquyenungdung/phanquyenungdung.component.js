import './style.css';
import phanquyenungdungHtml from './phanquyenungdung.html';
import phanquyenungdungController from './phanquyenungdung.controller';
/* @ngInject */
let phanquyenungdungComponent = {
  template: phanquyenungdungHtml,
  controllerAs: 'phanquyenungdung',
  controller: phanquyenungdungController
}
export default phanquyenungdungComponent;
