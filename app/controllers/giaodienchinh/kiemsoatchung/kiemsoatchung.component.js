import './style.css';
import kiemsoatchungHtml from './kiemsoatchung.html';
import kiemsoatchungController from './kiemsoatchung.controller';
/* @ngInject */
let kiemsoatchungComponent = {
  template: kiemsoatchungHtml,
  controllerAs: 'kiemsoatchung',
  controller: kiemsoatchungController
}
export default kiemsoatchungComponent;
