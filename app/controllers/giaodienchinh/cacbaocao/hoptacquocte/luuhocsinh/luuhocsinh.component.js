import './style.css';
import luuhocsinhHtml from './luuhocsinh.html';
import luuhocsinhController from './luuhocsinh.controller';
/* @ngInject */
let luuhocsinhComponent = {
  template: luuhocsinhHtml,
  controllerAs: 'luuhocsinh',
  controller: luuhocsinhController
}
export default luuhocsinhComponent;
