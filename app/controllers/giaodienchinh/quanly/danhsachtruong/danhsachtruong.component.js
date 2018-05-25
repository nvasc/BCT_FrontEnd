import './style.css';
import danhsachtruongHtml from './danhsachtruong.html';
import danhsachtruongController from './danhsachtruong.controller';
/* @ngInject */
let danhsachtruongComponent = {
  template: danhsachtruongHtml,
  controllerAs: 'danhsachtruong',
  controller: danhsachtruongController
}
export default danhsachtruongComponent;
