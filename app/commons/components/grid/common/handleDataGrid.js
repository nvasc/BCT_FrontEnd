export default function HandleDataGrid(timeout, http, url, filterDefault, scope) {   
         
  var self = this;
  self.count = 0;
  self.getFirstData = function(pagingGrid, gridApi, orderGrid, filterGrid, setDataResult) {
    var filter = {};
    if (filterDefault) {
      filter = angular.copy(filterDefault)
    }
    pagingGrid.defaultData();
    filter.Skip = pagingGrid.skip;
    filter.Take = pagingGrid.take;
    filter.OrderBys = orderGrid.getOrderBy();
    filter.Filters = filterGrid.getCondition(gridApi);
    
    return http.post(url, filter)
      .then(function (response) {
        var data = response.data.Data;
        pagingGrid.total = response.data.Count;
        if (setDataResult) {
          setDataResult(data);
        }
      });
  }; 

  self.getDataDown = function(pagingGrid, gridApi, orderGrid, filterGrid, 
    setDataResult, dataName) {       
    // if (!pagingGrid.isNext()) {
    //   return;
    // }
    pagingGrid.handlePageDown();
    var filter = {};
    if (filterDefault) {
      filter = angular.copy(filterDefault)
    }
    filter.Skip = pagingGrid.skip;
    filter.Take = pagingGrid.take;
    filter.OrderBys = orderGrid.getOrderBy();
    filter.Filters = filterGrid.getCondition(gridApi);

    return http.post(url, filter)
      .then(function (response) {
        pagingGrid.lastPage++;
        var data = response.data.Data;
        gridApi.infiniteScroll.saveScrollPercentage();
        scope[dataName] = scope[dataName].concat(data);
        pagingGrid.total = response.data.Count;
        return gridApi.infiniteScroll.dataLoaded(pagingGrid.firstPage > 0,
          pagingGrid.lastPage < pagingGrid.numberPage()).
        then(function () {
          checkDataLength(pagingGrid, gridApi, setDataResult, scope[dataName], 'up');
        });
      })
      .catch(function (error) {
        return gridApi.infiniteScroll.dataLoaded();
      });
  };  

  self.getDataUp = function(pagingGrid, gridApi, orderGrid, filterGrid, setDataResult, dataName) {
    pagingGrid.handlePageUp();
    var filter = {};
    if (filterDefault) {
      filter = angular.copy(filterDefault)
    }
    filter.Skip = pagingGrid.skip;
    filter.Take = pagingGrid.take;
    filter.OrderBys = orderGrid.getOrderBy();
    filter.Filters = filterGrid.getCondition(gridApi);

    return http.post(url, filter)
      .then(function (response) {
        var data = response.data.Data;
        pagingGrid.firstPage--;
        gridApi.infiniteScroll.saveScrollPercentage();
        scope[dataName] = data.concat(scope[dataName]);
        pagingGrid.total = response.data.Count;
        return gridApi.infiniteScroll.dataLoaded(pagingGrid.firstPage > 0, 
          pagingGrid.lastPage < pagingGrid.numberPage())
          .then(function () {
            checkDataLength(pagingGrid, gridApi, setDataResult, scope[dataName], 'down');
          });
      })
      .catch(function (error) {
        return gridApi.infiniteScroll.dataLoaded();
      });
  };

  function checkDataLength(pagingGrid, gridApi, setDataResult, dataResult, discardDirection) {
    // work out whether we need to discard a page, if so discard from the direction passed in
    if (pagingGrid.lastPage - pagingGrid.firstPage > pagingGrid.aboutRemovePage) {
      // we want to remove a page
      gridApi.infiniteScroll.saveScrollPercentage();
      if (discardDirection === 'up') {
        var data = dataResult.slice(pagingGrid.pageSize);
        if (setDataResult) {
          setDataResult(data);
        }
        pagingGrid.firstPage++;
        timeout(function () {
          // wait for grid to ingest data changes
          gridApi.infiniteScroll.dataRemovedTop(pagingGrid.firstPage > 0, 
            pagingGrid.lastPage < pagingGrid.numberPage());
        });
      } else {
        var data = dataResult.slice(0, pagingGrid.total);
        if (setDataResult) {
          setDataResult(data);
        }
        pagingGrid.lastPage--;
        timeout(function () {
          gridApi.infiniteScroll.dataRemovedBottom(pagingGrid.firstPage > 0, 
            pagingGrid.lastPage < pagingGrid.numberPage());
        });
      }
    }    
  };

  self.runFirst = function(pagingGrid, gridApi, orderGrid, filterGrid, setDataResult) {
    self.getFirstData(pagingGrid, gridApi, orderGrid, filterGrid, setDataResult).then(function () {
      timeout(function () {          
        gridApi.infiniteScroll.resetScroll(pagingGrid.firstPage > 0, 
            pagingGrid.lastPage < pagingGrid.numberPage());
      });
    });
  }
}