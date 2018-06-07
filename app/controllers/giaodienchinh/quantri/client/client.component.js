import './style.css';
import clientHtml from './client.html';
import clientController from './client.controller';
/* @ngInject */
let clientComponent = {
  template: clientHtml,
  controllerAs: 'client',
  controller: clientController
}
export default clientComponent;
