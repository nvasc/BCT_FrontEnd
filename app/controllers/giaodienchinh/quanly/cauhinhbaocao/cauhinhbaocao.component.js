import './style.css';
import cauhinhbaocaoHtml from './cauhinhbaocao.html';
import cauhinhbaocaoController from './cauhinhbaocao.controller';
/* @ngInject */
let cauhinhbaocaoComponent = {
  template: cauhinhbaocaoHtml,
  controllerAs: 'cauhinhbaocao',
  controller: cauhinhbaocaoController
}
export default cauhinhbaocaoComponent;
