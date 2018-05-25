import './style.css';
import lanhdaoHtml from './lanhdao.html';
import lanhdaoController from './lanhdao.controller';
/* @ngInject */
let lanhdaoComponent = {
  template: lanhdaoHtml,
  controllerAs: 'lanhdao',
  controller: lanhdaoController
}
export default lanhdaoComponent;
