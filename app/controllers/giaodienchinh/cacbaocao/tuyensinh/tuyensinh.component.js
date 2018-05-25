import './style.css';
import tuyensinhHtml from './tuyensinh.html';
import tuyensinhController from './tuyensinh.controller';
/* @ngInject */
let tuyensinhComponent = {
  template: tuyensinhHtml,
  controllerAs: 'tuyensinh',
  controller: tuyensinhController
}
export default tuyensinhComponent;
