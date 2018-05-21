import './style.css';
import layoutHtml from './layout.html';
import layoutController from './layout.controller';

/* @ngInject */
let layoutComponent = {
  template: layoutHtml,
  controllerAs: 'layout',
  controller: layoutController
}
export default layoutComponent;
