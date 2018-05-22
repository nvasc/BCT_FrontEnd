import './style.css';
import './script.js';
import giaodienHtml from './giaodien.html';
import giaodienController from './giaodien.controller';

/* @ngInject */
let giaodienComponent = {
  template: giaodienHtml,
  controllerAs: 'giaodien',
  controller: giaodienController
}
export default giaodienComponent;
