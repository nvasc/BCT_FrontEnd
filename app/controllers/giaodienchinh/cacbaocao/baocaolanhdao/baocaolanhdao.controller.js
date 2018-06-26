//import google from 'google'

function baocaolanhdaoController ($scope, baocaolanhdaoService, $timeout, $document) {
  const vm = this;
  baocaolanhdaoService.init();

  //Theo trình độ đào tạo
  //$scope.chartWidth_DaoTao = 1000;
  $scope.chartHeight_DaoTao = 400;
  $scope.chartData_DaoTao = [
    ['Tên','Tổng số','Tr.đó: Nữ'],
    ['Dân tộc ít người',10,6],
    ['Giáo sư',3,1],
    ['Phó giáo sư',10,0],
    ['TSKH và Tiến sĩ',110,20],
    ['Thạc sĩ',765,339],
    ['CK Y cấp I, II',0,0],
    ['Đại học',419,210],
    ['Cao đẳng',40,13],
    ['Khác',206,91],
  ];

  //Theo độ tuổi
  $scope.chartWidth_DoTuoi = 500;
  $scope.chartHeight_DoTuoi = 320;
  $scope.chartData_DoTuoi = [
    ['Độ tuổi','Tổng số'],
    ['Dưới 30 tuổi',201],
    ['Từ 30 đến 35',316],
    ['Từ 36 đến 40',224],
    ['Từ 41 đến 45',110],
    ['Từ 46 đến 50',82],
    ['Từ 51 đến 55',72],
    ['Từ 56 đến 60',27],
    ['Trên 60 tuổi',2]
  ];
  //Theo cán bộ
  $scope.chartWidth_CanBo = 500;
  $scope.chartHeight_CanBo = 320;
  $scope.chartData_CanBo = [
    ['Cán bộ','Tổng số'],
    ['Cán bộ nhân viên',506],
    ['Giảng viên',1034],
    ['Giảng viên thỉnh giảng',0]
  ];
  //Theo nhân viên
  $scope.chartWidth_NhanVien = 500;
  $scope.chartHeight_NhanVien = 320;
  $scope.chartData_NhanVien = [
    ['Cán bộ nhân viên','Tổng số'],
    ['Cán bộ quản lý',127],
    ['Trong đó: Kiêm nhiệm giảng dạy',113],
    ['Cán bộ hành chính, nghiệp vụ, phục vụ (không bao gồm giảng viên )',232],
    ['Trong đó: Kiêm nhiệm giảng dạy',0],
    ['Nhân viên phục vụ',147]
  ];
  //Theo giảng viên
  $scope.chartWidth_NhanVien = 500;
  $scope.chartHeight_NhanVien = 320;
  $scope.chartData_NhanVien = [
    ['Cán bộ nhân viên','Tổng số'],
    ['Cán bộ quản lý',506],
    ['Giảng viên',1034],
    ['Giảng viên thỉnh giảng',0]
  ];
  //Theo giảng viên
  $scope.chartWidth_GiangVien = 500;
  $scope.chartHeight_GiangVien = 320;
  $scope.chartData_GiangVien = [
    ['Giảng viên','Tổng số'],
    ['Cơ hữu',956],
    ['Hợp đồng có thời hạn',72],
    ['Thử việc',6]
  ];
  //Tab
  $scope.tab = 1;

  $scope.setTab = function(newTab) {
    $scope.tab = newTab;
  };

  $scope.isSet = function(tabNum) {
    return $scope.tab === tabNum;
  };
}

/* @ngInject */
export default baocaolanhdaoController;