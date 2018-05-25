import './style.css';
import nhatkyvaloiHtml from './nhatkyvaloi.html';
import nhatkyvaloiController from './nhatkyvaloi.controller';
/* @ngInject */
let nhatkyvaloiComponent = {
  template: nhatkyvaloiHtml,
  controllerAs: 'nhatkyvaloi',
  controller: nhatkyvaloiController
}
export default nhatkyvaloiComponent;
