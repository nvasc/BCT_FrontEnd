import './style.css';
import hocsinhsinhvienHtml from './hocsinhsinhvien.html';
import hocsinhsinhvienController from './hocsinhsinhvien.controller';
/* @ngInject */
let hocsinhsinhvienComponent = {
  template: hocsinhsinhvienHtml,
  controllerAs: 'hocsinhsinhvien',
  controller: hocsinhsinhvienController
}
export default hocsinhsinhvienComponent;
