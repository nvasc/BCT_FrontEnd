import './style.css';
import dantocHtml from './dantoc.html';
import dantocController from './dantoc.controller';
/* @ngInject */
let dantocComponent = {
  template: dantocHtml,
  controllerAs: 'dantoc',
  controller: dantocController
}
export default dantocComponent;
