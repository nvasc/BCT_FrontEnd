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
      colsBold: '=',
      //ciFilterObject: '=',
      //ciParamester: '='
    },
    template: function (element, attrs) {
      return `<table class="blueTable">
      <thead ng-bind-html="table.headerTemplete">
      </thead>
      <tbody>
        <tr ng-repeat="row in table.tableData track by $index" index={{index}}>
          <td  ng-repeat="col in table.columns">
            <span ng-class="[table.isNumber(row[col])==true?'formatright':'', 
            row['IsBold']==true?'formatbold':'',
            row['IsCenter']==true?'formatcenter':'', 
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
