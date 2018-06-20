import './style.css';
import loaihinhdaotaoHtml from './loaihinhdaotao.html';
import loaihinhdaotaoController from './loaihinhdaotao.controller';
/* @ngInject */
let loaihinhdaotaoComponent = {
  template: loaihinhdaotaoHtml,
  controllerAs: 'loaihinhdaotao',
  controller: loaihinhdaotaoController
}
export default loaihinhdaotaoComponent;
