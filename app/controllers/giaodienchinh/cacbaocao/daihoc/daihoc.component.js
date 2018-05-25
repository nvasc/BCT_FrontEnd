import './style.css';
import daihocHtml from './daihoc.html';
import daihocController from './daihoc.controller';
/* @ngInject */
let daihocComponent = {
  template: daihocHtml,
  controllerAs: 'daihoc',
  controller: daihocController
}
export default daihocComponent;
