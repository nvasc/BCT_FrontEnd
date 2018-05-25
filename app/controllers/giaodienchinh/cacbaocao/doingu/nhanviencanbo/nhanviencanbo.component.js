import './style.css';
import nhanviencanboHtml from './nhanviencanbo.html';
import nhanviencanboController from './nhanviencanbo.controller';
/* @ngInject */
let nhanviencanboComponent = {
  template: nhanviencanboHtml,
  controllerAs: 'nhanviencanbo',
  controller: nhanviencanboController
}
export default nhanviencanboComponent;
