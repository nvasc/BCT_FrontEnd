import './style.css';
import exampleHtml from './example.html';
import exampleController from './example.controller';
/* @ngInject */
let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'example',
  controller: exampleController
}
export default exampleComponent;
