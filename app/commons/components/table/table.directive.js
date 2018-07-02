import controller from './table.controller';
import './style.css';
import tableTemplate from './table.html';

function tableDirective() {
  return {
    restrict: 'EA',
    scope: {
      url: '@',
      tableData: '=', //table data will set by directive consumer
      columns: '=', // no need for named attributes
      theadTemplate: '=',
      colsBold: '='
    },
    template: function (element, attrs) {
      return `<table class="blueTable">
      <thead ng-bind-html="table.headerTemplete">
      </thead>
      <tbody>
        <tr ng-repeat="row in tableData track by $index" index={{index}}>
          <td  ng-repeat="col in columns">
            <span ng-class="[table.isNumber(row[col])==true?'formatright':'', 
            row['isbold']==true?'formatbold':'',
            row['iscenter']==true?'formatcenter':'', 
            colsBold[col] == 1?'formatbold':'']">
              {{ row[col] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>`;
    },
    controllerAs: 'table',
    controller: controller
  }
}
export default tableDirective;
