import './style.css';
import tiensiHtml from './tiensi.html';
import tiensiController from './tiensi.controller';
/* @ngInject */
let tiensiComponent = {
  template: tiensiHtml,
  controllerAs: 'tiensi',
  controller: tiensiController
}
export default tiensiComponent;
