import './style.css';
import tongiaoHtml from './tongiao.html';
import tongiaoController from './tongiao.controller';
/* @ngInject */
let tongiaoComponent = {
  template: tongiaoHtml,
  controllerAs: 'tongiao',
  controller: tongiaoController
}
export default tongiaoComponent;
