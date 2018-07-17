import _ from 'lodash';

function tabConst() {
  var self = {};
  self.tabDaoTao = 1;
  self.tabDoTuoi = 2;
  self.tabCanBo = 3;
  self.tabNhanVien = 4;
  self.tabGiangVien = 5;
  self.tabKhoaBoMon = 6;
  return self;
};

function typeChartConst() {
  var seft = {};
  seft.pieChart = 'pie';
  seft.columnChart = 'column';
  return seft;
}

function baocaolanhdaoController ($scope, baocaolanhdaoService, $timeout, $document, 
  oauthDataFactory, $http) {
  const vm = this;
  baocaolanhdaoService.init();
  vm.tabC = tabConst();
  vm.typeChartC = typeChartConst();
  var _mYear = new Date().getFullYear();
  vm.mYear = _mYear.toString() + '-' + (_mYear + 1).toString();
  vm.schoolId = 0;

  //column map dữ liệu
  vm.cols = ['Ten','TongSo','TongSoNu','TongSoDanToc','TongSoDanTocNu','TongGiaoSu',
    'TongGiaoSuNu',
    'TongPhoGiaoSu','TongPhoGiaoSuNu','TongTienSi','TongTienSiNu','TongSoThacSi','TongSoThacSiNu',
    'TongSoChuyenKhoaY','TongSoChuyenKhoaYNu','TongSoDaiHoc','TongSoDaiHocNu','TongSoCaoDang',
    'TongSoCaoDangNu','TongSoKhac','TongSoKhacNu'];
  vm.colsBold = {
    'TongSo': 1,
    'TongSoNu' : 1,
  };

  vm.filterObject = {};
  vm.paramester = `?idThongTinTruong=${vm.schoolId}&idNam=${vm.mYear}`;
  $scope.$watch('baocaolanhdao.schoolId', function (nval, oval) {    
    if (!angular.equals(nval, oval)) {
      vm.paramester = `?idThongTinTruong=${vm.schoolId}&idNam=${vm.mYear}`;
    }
  });
  $scope.$watch('baocaolanhdao.mYear', function (nval, oval) {
    
    if (!angular.equals(nval, oval)) {
      vm.paramester = `?idThongTinTruong=${vm.schoolId}&idNam=${vm.mYear}`;
    }
  });

  var filter = {};
  vm.loadData = function() {
    var url = 'api/baocaolanhdao/GetSelectData';
    if (vm.paramester) {
      url += vm.paramester
    }
    $http.post(oauthDataFactory.urlMain() + url, 
    filter).then(function (resp) {
      vm.reportDataDoiNgu = resp.data.Data;
    });
  };

  vm.loadData();

  $scope.$watch('baocaolanhdao.paramester', function (nval, oval) {
    if (!angular.equals(nval, oval)) {
      vm.loadData();
    }
  });

  $scope.$watch('baocaolanhdao.reportDataDoiNgu', function(nval, oval) {
    if (!angular.equals(nval, oval)) {
      switch (vm.tab) {
        case vm.tabC.tabDaoTao:
          loadChartDaoTao();
          break;
        case vm.tabC.tabDoTuoi:
          loadChartDoTuoi();
          break;
        case vm.tabC.tabCanBo:
          loadChartCanBo();
          break;
        case vm.tabC.tabNhanVien:
          loadChartNhanVien();
          break;
        case vm.tabC.tabGiangVien:
          loadChartGiangVien();
          break;
        case vm.tabC.tabKhoaBoMon:
          loadChartKhoaBoMon();
          break;
      }
    }
  });

  //tạo dữ liệu giả cho báo cáo khoa, bộ môn
  vm.reportDataKhoa = [
    {
      'TenKhoa':'Tổng số',
      'TongSo' : 1147 ,
      'TongSoNu' : 472,
      'TongSoDanToc' : 7,
      'TongSoDanTocNu' : 5,
      'TongGiaoSu':3,
      'TongPhoGiaoSu':10,
      'TongTienSi':110,
      'TongSoThacSi':765,
      'TongSoChuyenKhoaY':0,
      'TongSoDaiHoc':266,
      'TongSoCaoDang':5,
      'TongSoKhac':3,
      'isbold':true,
      'iscenter':true
    },
    {
      'TenKhoa':'Chia ra:',
      'TongSo' : 0 ,
      'TongSoNu' : null,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':null,
      'TongSoThacSi':null,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':null,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Công nghệ Hóa học',
      'TongSo' : 69 ,
      'TongSoNu' : 25,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':1,
      'TongTienSi':16,
      'TongSoThacSi':40,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':13,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Công nghệ Cơ khí',
      'TongSo' : 84 ,
      'TongSoNu' : 7,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':1,
      'TongPhoGiaoSu':2,
      'TongTienSi':14,
      'TongSoThacSi':38,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':26,
      'TongSoCaoDang':4,
      'TongSoKhac':2,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Lý luận chính trị',
      'TongSo' : 33 ,
      'TongSoNu' : 17,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':4,
      'TongSoThacSi':30,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':3,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Khoa học cơ bản',
      'TongSo' : 37 ,
      'TongSoNu' : 5,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':4,
      'TongSoThacSi':30,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':3,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Ngoại ngữ (Tiếng Anh)',
      'TongSo' : 59 ,
      'TongSoNu' : 40,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':null,
      'TongSoThacSi':55,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':4,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Quản trị kinh doanh',
      'TongSo' : 87 ,
      'TongSoNu' : 34,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':1,
      'TongTienSi':12,
      'TongSoThacSi':63,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':12,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Tài chính - Ngân hàng',
      'TongSo' : 53 ,
      'TongSoNu' : 31,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':6,
      'TongSoThacSi':32,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':15,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Kế toán - Kiểm toán',
      'TongSo' : 59 ,
      'TongSoNu' : 38,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':1,
      'TongTienSi':5,
      'TongSoThacSi':40,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':14,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Thương mại du lịch',
      'TongSo' : 40 ,
      'TongSoNu' : 23,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':6,
      'TongSoThacSi':23,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':11,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa May thời trang',
      'TongSo' : 28 ,
      'TongSoNu' : 19,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':1,
      'TongTienSi':2,
      'TongSoThacSi':20,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':6,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Công nghệ Thông tin',
      'TongSo' : 82 ,
      'TongSoNu' : 26,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':1,
      'TongPhoGiaoSu':1,
      'TongTienSi':10,
      'TongSoThacSi':55,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':17,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Công nghệ Điện tử',
      'TongSo' : 50 ,
      'TongSoNu' : 9,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':4,
      'TongSoThacSi':34,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':12,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Công nghệ Điện',
      'TongSo' : 58 ,
      'TongSoNu' : 9,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':9,
      'TongSoThacSi':30,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':19,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Công nghệ Động lực',
      'TongSo' : 29 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':1,
      'TongSoThacSi':17,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':10,
      'TongSoCaoDang':null,
      'TongSoKhac':1,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Công nghệ Nhiệt lạnh',
      'TongSo' : 24 ,
      'TongSoNu' : 4,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':2,
      'TongSoThacSi':9,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':13,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Khoa Giáo dục Thường xuyên',
      'TongSo' : 59 ,
      'TongSoNu' : 49,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':null,
      'TongSoThacSi':31,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':28,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Viện CN Sinh học & Thực phẩm',
      'TongSo' : 54 ,
      'TongSoNu' : 28,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':1,
      'TongTienSi':5,
      'TongSoThacSi':45,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':4,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Viện KHCN & QLMT',
      'TongSo' : 37 ,
      'TongSoNu' : 19,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':1,
      'TongPhoGiaoSu':2,
      'TongTienSi':9,
      'TongSoThacSi':28,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':null,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Trung tâm GD Quốc phòng & Thể chất',
      'TongSo' : 11 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':null,
      'TongSoThacSi':1,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':9,
      'TongSoCaoDang':1,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Cơ sở Thanh Hóa',
      'TongSo' : 105 ,
      'TongSoNu' : 49,
      'TongSoDanToc' : 3,
      'TongSoDanTocNu' : 3,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':1,
      'TongSoThacSi':65,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':39,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    },
    {
      'TenKhoa':'Cơ sở Quảng Ngãi',
      'TongSo' : 89 ,
      'TongSoNu' : 40,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongPhoGiaoSu':null,
      'TongTienSi':2,
      'TongSoThacSi':79,
      'TongSoChuyenKhoaY':null,
      'TongSoDaiHoc':8,
      'TongSoCaoDang':null,
      'TongSoKhac':null,
      'isbold':false,
      'iscenter':false
    }
  ];

  //Theo trình độ đào tạo
  function loadChartDaoTao () {
    var dataTemp = _.filter(vm.reportDataDoiNgu, function(p) { 
      return p.IdLoaiHinhLamViecChiTiet === 12; 
    });
   
    if (dataTemp.length > 0) {
      vm.chartData_DaoTao = 
      {
        cols: [
          {'id':'Ten','label':'Tên','type':'string'},
          {'id':'TongSo','label':'Tổng số','type':'number'},
          {'id':'TongSoNu','label':'Tổng số Nữ','type':'number'}
        ],
        rows: [
          {c:[{v: 'Dân tộc ít người'},{v: dataTemp[0].TongSoDanToc},
          {v: dataTemp[0].TongSoDanTocNu}]},
          {c:[{v: 'Giáo sư'},{v: dataTemp[0].TongGiaoSu},{v: dataTemp[0].TongGiaoSuNu}]},
          {c:[{v: 'Phó giáo sư'},{v: dataTemp[0].TongPhoGiaoSu},{v: dataTemp[0].TongPhoGiaoSuNu}]},
          {c:[{v: 'TSKH và Tiến sĩ'},{v: dataTemp[0].TongTienSi},{v: dataTemp[0].TongTienSiNu}]},
          {c:[{v: 'Thạc sĩ'},{v: dataTemp[0].TongSoThacSi},{v: dataTemp[0].TongSoThacSi}]},
          {c:[{v: 'CK Y cấp I, II'},{v: dataTemp[0].TongSoChuyenKhoaY},
          {v: dataTemp[0].TongSoChuyenKhoaYNu}]},
          {c:[{v: 'Đại học'},{v: dataTemp[0].TongSoDaiHoc},{v: dataTemp[0].TongSoDaiHocNu}]},
          {c:[{v: 'Cao đẳng'},{v: dataTemp[0].TongSoCaoDang},{v: dataTemp[0].TongSoCaoDang}]},
          {c:[{v: 'Khác'},{v: dataTemp[0].TongSoKhac},{v: dataTemp[0].TongSoKhacNu}]}
        ]
      }
    }
    
  };

  //Theo độ tuổi
  function loadChartDoTuoi () {
    var dataTemp = _.filter(vm.reportDataDoiNgu, function(p) { 
      return p.IdLoaiHinhLamViecChiTiet === 25 || p.IdLoaiHinhLamViecChiTiet === 26 ||
      p.IdLoaiHinhLamViecChiTiet === 27 || p.IdLoaiHinhLamViecChiTiet === 28 ||
      p.IdLoaiHinhLamViecChiTiet === 30 || p.IdLoaiHinhLamViecChiTiet === 31 ||
      p.IdLoaiHinhLamViecChiTiet === 32 || p.IdLoaiHinhLamViecChiTiet === 33; 
    });

    if (dataTemp.length > 0) {
      vm.chartData_DoTuoi = {
        cols: [
          {'id':'DoTuoi','label':'Độ tuổi','type':'string'},
          {'id':'TongSo','label':'Tổng số','type':'number'},
          {'id':'Id','label':'', 'type':'number'},
        ],
        rows: [
          {c:[{v: 'Dưới 30 tuổi'},{v: dataTemp[0].TongSo},{v:dataTemp[0].Id}]},
          {c:[{v: 'Từ 30 đến 35'},{v: dataTemp[1].TongSo},{v:dataTemp[1].Id}]},
          {c:[{v: 'Từ 36 đến 40'},{v: dataTemp[2].TongSo},{v:dataTemp[2].Id}]},
          {c:[{v: 'Từ 41 đến 45'},{v: dataTemp[3].TongSo},{v:dataTemp[3].Id}]},
          {c:[{v: 'Từ 46 đến 50'},{v: dataTemp[4].TongSo},{v:dataTemp[4].Id}]},
          {c:[{v: 'Từ 51 đến 55'},{v: dataTemp[5].TongSo},{v:dataTemp[5].Id}]},
          {c:[{v: 'Từ 56 đến 60'},{v: dataTemp[6].TongSo},{v:dataTemp[6].Id}]},
          {c:[{v: 'Trên 60 tuổi'},{v: dataTemp[7].TongSo},{v:dataTemp[7].Id}]}
        ]
      }
    }
  };
 
  //Theo cán bộ
  function loadChartCanBo() {
    console.log(vm.reportDataDoiNgu)
    var dataTemp = _.filter(vm.reportDataDoiNgu, function(p) { 
      return p.IdLoaiHinhLamViecChiTiet === 13 || p.IdLoaiHinhLamViecChiTiet === 14 ||
      p.IdLoaiHinhLamViecChiTiet === 15; 
    });
    if (dataTemp.length > 0) {
      vm.chartData_CanBo = {
        cols: [
          {'id':'CanBo','label':'Cán bộ','type':'string'},
          {'id':'TongSo','label':'Tổng số','type':'number'},
          {'id':'Id','label':'', 'type':'number'},
        ],
        rows: [
          {c:[{v: 'Cán bộ nhân viên'},{v: dataTemp[0].TongSo},{v:dataTemp[0].Id}]},
          {c:[{v: 'Giảng viên'},{v: dataTemp[1].TongSo},{v:dataTemp[1].Id}]},
          {c:[{v: 'Giảng viên thỉnh giảng'},{v: dataTemp[2].TongSo},{v:dataTemp[2].Id}]}
        ]
      };
    }
  };

  //Theo nhân viên
  function loadChartNhanVien() {
    console.log(vm.reportDataDoiNgu)
    var dataTemp = _.filter(vm.reportDataDoiNgu, function(p) { 
      return p.IdLoaiHinhLamViecChiTiet === 16 || p.IdLoaiHinhLamViecChiTiet === 19 ||
      p.IdLoaiHinhLamViecChiTiet === 17 || p.IdLoaiHinhLamViecChiTiet === 19 ||
      p.IdLoaiHinhLamViecChiTiet === 18; 
    });
    if (dataTemp.length > 0) {
      vm.chartData_NhanVien = {
        cols: [
          {'id':'CanBoNhanVien','label':'Cán bộ nhân viên','type':'string'},
          {'id':'TongSo','label':'Tổng số','type':'number'}
        ],
        rows: [
          {c:[{v: 'Cán bộ quản lý'},{v: dataTemp[0].TongSo},{v:dataTemp[0].Id}]},
          {c:[{v: 'Trong đó: Kiêm nhiệm giảng dạy'},{v: dataTemp[1].TongSo},{v:dataTemp[1].Id}]},
          {c:[{v: 'Cán bộ hành chính, nghiệp vụ, phục vụ (không bao gồm giảng viên )'},
          {v: dataTemp[2].TongSo},{v:dataTemp[2].Id}]},
          {c:[{v: 'Trong đó: Kiêm nhiệm giảng dạy'},{v: dataTemp[3].TongSo},{v:dataTemp[3].Id}]},
          {c:[{v: 'Nhân viên phục vụ'},{v: dataTemp[4].TongSo},{v:dataTemp[4].Id}]}
        ]
      };
    }
  };
  
  //Theo giảng viên
  function loadChartGiangVien() {
    vm.chartData_GiangVien = {
      cols: [

        {'id':'GiangVien','label':'Giảng viên','type':'string'},
        {'id':'TongSo','label':'Tổng số','type':'number'}
      ],
      rows: [
        {c:[{v: 'Cơ hữu'},{v: 956}]},
        {c:[{v: 'Hợp đồng có thời hạn'},{v: 72}]},
        {c:[{v: 'Thử việc'},{v: 6}]}
      ]
    };
  };

  //Theo khoa, tổ bộ môn
  function loadChartKhoaBoMon() {
    vm.chartData_KhoaBoMon = {
      cols: [
        {'id':'TenKhoa','label':'Tên khoa','type':'string'},
        {'id':'TongSo','label':'Tổng số','type':'number'}
      ],
      rows: [
        {c:[{v: 'Khoa Công nghệ Hóa học'},{v: 69}]},
        {c:[{v: 'Khoa Công nghệ Cơ khí'},{v: 84}]},
        {c:[{v: 'Khoa Lý luận chính trị'},{v: 33}]},
        {c:[{v: 'Khoa Khoa học cơ bản'},{v: 37}]},
        {c:[{v: 'Khoa Ngoại ngữ (Tiếng Anh)'},{v: 59}]},
        {c:[{v: 'Khoa Quản trị kinh doanh'},{v: 87}]},
        {c:[{v: 'Khoa Tài chính - Ngân hàng'},{v: 53}]},
        {c:[{v: 'Khoa Kế toán - Kiểm toán'},{v: 59}]},
        {c:[{v: 'Khoa Thương mại du lịch'},{v: 40}]},
        {c:[{v: 'Khoa May thời trang'},{v: 28}]},
        {c:[{v: 'Khoa Công nghệ Thông tin'},{v: 82}]},
        {c:[{v: 'Khoa Công nghệ Điện tử'},{v: 50}]},
        {c:[{v: 'Khoa Công nghệ Điện'},{v: 58}]},
        {c:[{v: 'Khoa Công nghệ Động lực'},{v: 29}]},
        {c:[{v: 'Khoa Công nghệ Nhiệt lạnh'},{v: 24}]},
        {c:[{v: 'Khoa Giáo dục Thường xuyên'},{v: 59}]},
        {c:[{v: 'Viện CN Sinh học & Thực phẩm'},{v: 54}]},
        {c:[{v: 'Viện KHCN & QLMT'},{v: 37}]},
        {c:[{v: 'Trung tâm GD Quốc phòng & Thể chất'},{v: 11}]},
        {c:[{v: 'Cơ sở Thanh Hóa'},{v: 105}]},
        {c:[{v: 'Cơ sở Quảng Ngãi'},{v: 89}]},
      ]
    };
  };
  
  //Tab
  vm.tab = 1;

  vm.setTab = function(newTab) {
    vm.tab = newTab;
  };

  $scope.$watch('baocaolanhdao.tab', function(val) {
    switch (val) {
      case vm.tabC.tabDaoTao:
        loadChartDaoTao();
        break;
      case vm.tabC.tabDoTuoi:
        loadChartDoTuoi();
        break;
      case vm.tabC.tabCanBo:
        loadChartCanBo();
        break;
      case vm.tabC.tabNhanVien:
        loadChartNhanVien();
        break;
      case vm.tabC.tabGiangVien:
        loadChartGiangVien();
        break;
      case vm.tabC.tabKhoaBoMon:
        loadChartKhoaBoMon();
        break;
    }
  });

  vm.isSet = function(tabNum) {
    return vm.tab === tabNum;
  };

  vm.headTable = `
    <tr>
      <th rowspan="3" style="width: 150px"></th>
      <th rowspan="3" style="width: 50px">Tổng số</th>
      <th colspan="7">Trong đó</th>
      <th colspan="12">Chia theo trình độ đào tạo</th>
    </tr>
    <tr>
      <th rowspan="2" style="width: 50px">Nữ</th>
      <th colspan="2">Dân tộc ít người</th>

      <th rowspan="2" style="width: 50px">Giáo sư</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>

      <th rowspan="2" style="width: 50px">Phó giáo sư</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>

      <th rowspan="2" style="width: 50px">TSKH và Tiến sĩ</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>

      <th rowspan="2" style="width: 50px">Thạc sĩ</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>

      <th rowspan="2" style="width: 50px">CK Y cấp I, II</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>

      <th rowspan="2" style="width: 50px">Đại học</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>

      <th rowspan="2" style="width: 50px">Cao đẳng</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>

      <th rowspan="2" style="width: 50px">Khác</th>
      <th rowspan="2" style="width: 50px">Tr.đó: Nữ</th>
    </tr>
    <tr>
      <th style="width: 50px">Tổng số</th>
      <th style="width: 50px">Tr.đó: Nữ</th>
    </tr>
    <tr>
      <td class="centertd">A</td>
      <td class="centertd">1</td>
      <td class="centertd">2</td>
      <td class="centertd">3</td>
      <td class="centertd">4</td>
      <td class="centertd">5</td>
      <td class="centertd">6</td>
      <td class="centertd">7</td>
      <td class="centertd">8</td>
      <td class="centertd">9</td>
      <td class="centertd">10</td>
      <td class="centertd">11</td>
      <td class="centertd">12</td>
      <td class="centertd">13</td>
      <td class="centertd">14</td>
      <td class="centertd">15</td>
      <td class="centertd">16</td>
      <td class="centertd">17</td>
      <td class="centertd">18</td>
      <td class="centertd">19</td>
      <td class="centertd">20</td>
    </tr>`;

  vm.colsKhoa = ['TenKhoa','TongSo','TongSoNu','TongSoDanToc','TongSoDanTocNu','TongGiaoSu',
    'TongPhoGiaoSu','TongTienSi','TongSoThacSi',
    'TongSoChuyenKhoaY','TongSoDaiHoc','TongSoCaoDang','TongSoKhac'];

  vm.headTableKhoa = `
    <tr>
      <th rowspan="3" style="width: 150px"></th>
      <th rowspan="3" style="width: 50px">Tổng số</th>
      <th colspan="5">Trong đó</th>
      <th colspan="6">Chia theo trình độ đào tạo</th>
    </tr>
    <tr>
      <th rowspan="2" style="width: 50px">Nữ</th>
      <th colspan="2">Dân tộc ít người</th>

      <th rowspan="2" style="width: 50px">Giáo sư</th>

      <th rowspan="2" style="width: 50px">Phó giáo sư</th>

      <th rowspan="2" style="width: 50px">TSKH và Tiến sĩ</th>

      <th rowspan="2" style="width: 50px">Thạc sĩ</th>

      <th rowspan="2" style="width: 50px">Chuyên khoa Y cấp I và II</th>

      <th rowspan="2" style="width: 50px">Đại học</th>

      <th rowspan="2" style="width: 50px">Cao đẳng</th>

      <th rowspan="2" style="width: 50px">Khác</th>
    </tr>
    <tr>
      <th style="width: 50px">Tổng số</th>
      <th style="width: 50px">Trong đó Nữ</th>
    </tr>
    <tr>
      <td class="centertd"></td>
      <td class="centertd">1</td>
      <td class="centertd">2</td>
      <td class="centertd">3</td>
      <td class="centertd">4</td>
      <td class="centertd">5</td>
      <td class="centertd">6</td>
      <td class="centertd">7</td>
      <td class="centertd">8</td>
      <td class="centertd">9</td>
      <td class="centertd">10</td>
      <td class="centertd">11</td>
      <td class="centertd">12</td>
    </tr>`;

  vm.doTuoiTypeChart = function(val) {
    vm.doTuoiType = val;
  }
  vm.doTuoiTypeChart(vm.typeChartC.pieChart);

  vm.canBoTypeChart = function(val) {
    vm.canBoType = val;
  }
  vm.canBoTypeChart(vm.typeChartC.pieChart);

  vm.nhanVienTypeChart = function(val) {
    vm.nhanVienType = val;
  }
  vm.nhanVienTypeChart(vm.typeChartC.pieChart);

  vm.giangVienTypeChart = function(val) {
    vm.giangVienType = val;
  }
  vm.giangVienTypeChart(vm.typeChartC.pieChart);

  vm.khoaBoMonTypeChart = function(val) {
    vm.khoaBoMonType = val;
  }
  vm.khoaBoMonTypeChart(vm.typeChartC.pieChart);

}

/* @ngInject */
export default baocaolanhdaoController;