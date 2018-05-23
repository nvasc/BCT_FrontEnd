import './style.css';
import giaodienchinhHtml from './giaodienchinh.html';
import giaodienchinhController from './giaodienchinh.controller';

/* @ngInject */
let giaodienchinhComponent = {
  template: giaodienchinhHtml,
  controllerAs: 'giaodienchinh',
  controller: giaodienchinhController
}
export default giaodienchinhComponent;
