import './style.css';
import phanquyennguoidungHtml from './phanquyennguoidung.html';
import phanquyennguoidungController from './phanquyennguoidung.controller';
/* @ngInject */
let phanquyennguoidungComponent = {
  template: phanquyennguoidungHtml,
  controllerAs: 'phanquyennguoidung',
  controller: phanquyennguoidungController
}
export default phanquyennguoidungComponent;
