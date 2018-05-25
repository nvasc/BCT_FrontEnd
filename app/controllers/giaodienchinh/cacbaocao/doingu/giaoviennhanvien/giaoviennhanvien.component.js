import './style.css';
import giaoviennhanvienHtml from './giaoviennhanvien.html';
import giaoviennhanvienController from './giaoviennhanvien.controller';
/* @ngInject */
let giaoviennhanvienComponent = {
  template: giaoviennhanvienHtml,
  controllerAs: 'giaoviennhanvien',
  controller: giaoviennhanvienController
}
export default giaoviennhanvienComponent;
