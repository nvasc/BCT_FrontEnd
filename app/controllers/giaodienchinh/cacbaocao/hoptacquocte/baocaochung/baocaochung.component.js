import './style.css';
import baocaochungHtml from './baocaochung.html';
import baocaochungController from './baocaochung.controller';
/* @ngInject */
let baocaochungComponent = {
  template: baocaochungHtml,
  controllerAs: 'baocaochung',
  controller: baocaochungController
}
export default baocaochungComponent;
