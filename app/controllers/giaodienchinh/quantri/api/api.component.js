import './style.css';
import apiHtml from './api.html';
import apiController from './api.controller';
/* @ngInject */
let apiComponent = {
  template: apiHtml,
  controllerAs: 'api',
  controller: apiController
}
export default apiComponent;
