import './style.css';
import nhapkhaubaocaoHtml from './nhapkhaubaocao.html';
import nhapkhaubaocaoController from './nhapkhaubaocao.controller';
/* @ngInject */
let nhapkhaubaocaoComponent = {
  template: nhapkhaubaocaoHtml,
  controllerAs: 'nhapkhaubaocao',
  controller: nhapkhaubaocaoController
}
export default nhapkhaubaocaoComponent;
