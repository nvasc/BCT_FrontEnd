import './style.css';
import thongbaoHtml from './thongbao.html';
import thongbaoController from './thongbao.controller';
/* @ngInject */
let thongbaoComponent = {
  template: thongbaoHtml,
  controllerAs: 'thongbao',
  controller: thongbaoController
}
export default thongbaoComponent;
