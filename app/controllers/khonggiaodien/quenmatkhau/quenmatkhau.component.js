import './style.css';
import quenmatkhauHtml from './quenmatkhau.html';
import quenmatkhauController from './quenmatkhau.controller';
/* @ngInject */
let quenmatkhauComponent = {
  template: quenmatkhauHtml,
  controllerAs: 'quenmatkhau',
  controller: quenmatkhauController
}
export default quenmatkhauComponent;
