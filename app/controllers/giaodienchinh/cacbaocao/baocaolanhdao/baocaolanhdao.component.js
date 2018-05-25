import './style.css';
import baocaolanhdaoHtml from './baocaolanhdao.html';
import baocaolanhdaoController from './baocaolanhdao.controller';
/* @ngInject */
let baocaolanhdaoComponent = {
  template: baocaolanhdaoHtml,
  controllerAs: 'baocaolanhdao',
  controller: baocaolanhdaoController
}
export default baocaolanhdaoComponent;
