import './style.css';
import giangviennhanvienHtml from './giangviennhanvien.html';
import giangviennhanvienController from './giangviennhanvien.controller';
/* @ngInject */
let giangviennhanvienComponent = {
  template: giangviennhanvienHtml,
  controllerAs: 'giangviennhanvien',
  controller: giangviennhanvienController
}
export default giangviennhanvienComponent;
