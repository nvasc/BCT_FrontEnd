
function PagingGrid() {
  var _pageSize = 50;
  var self = this;
  self.pageSize = _pageSize;
  self.firstPage = 0;
  self.lastPage = 0;
  self.skip = 0;
  self.take = _pageSize;
  self.total = 0;
  self.aboutRemovePage = 5;

  self.defaultData = function () {
    self.pageSize = _pageSize;
    self.firstPage = 0;
    self.lastPage = 0;
    self.skip = 0;
    self.take = _pageSize;
    self.total = 0;
  }

  self.numberPage = function () {
    return (self.total / self.pageSize) + (self.total % self.pageSize > 0 ? 1 : 0);
  }

  self.handleNextSkip = function(s) {
    if (s === 0) {
      self.skip = self.take + 1;
    } else {
      self.skip = s + self.take;
    }
  }

  self.handlePageDown = function () {
    if (self.lastPage !== 0) {
      self.skip = (self.lastPage * self.take) + 1;
    }
    self.handleNextSkip(self.skip);
  }

  self.handlePreviousSkip = function(s) {
    if (s !== 0) {
      self.skip = s - self.take;
    }
  }

  self.handlePageUp = function() {
    if (self.firstPage !== 0) {
      self.skip = (self.firstPage * self.take) + 1;
    }
    self.handlePreviousSkip(self.skip);
  }
}

export default PagingGrid