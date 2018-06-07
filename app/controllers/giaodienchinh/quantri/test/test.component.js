import './style.css';
import testHtml from './test.html';
import testController from './test.controller';
/* @ngInject */
let testComponent = {
  template: testHtml,
  controllerAs: 'test',
  controller: testController
}
export default testComponent;
