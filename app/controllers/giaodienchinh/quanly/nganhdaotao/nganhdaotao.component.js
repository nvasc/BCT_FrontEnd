import './style.css';
import nganhdaotaoHtml from './nganhdaotao.html';
import nganhdaotaoController from './nganhdaotao.controller';
/* @ngInject */
let nganhdaotaoComponent = {
  template: nganhdaotaoHtml,
  controllerAs: 'nganhdaotao',
  controller: nganhdaotaoController
}
export default nganhdaotaoComponent;
