import './style.css';
import nhomquyenHtml from './nhomquyen.html';
import nhomquyenController from './nhomquyen.controller';
/* @ngInject */
let nhomquyenComponent = {
  template: nhomquyenHtml,
  controllerAs: 'nhomquyen',
  controller: nhomquyenController
}
export default nhomquyenComponent;
