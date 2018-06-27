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
  //
  $scope.cols = ['Ten','TongSo','TongSoNu','TongSoDanToc','TongSoDanTocNu','TongGiaoSu',
    'TongGiaoSuNu',
    'TongPhoGiaoSu','TongPhoGiaoSuNu','TongTienSi','TongTienSiNu','TongSoThacSi','TongSoThacSiNu',
    'TongSoChuyenKhoaY','TongSoChuyenKhoaYNu','TongSoDaiHoc','TongSoDaiHocNu','TongSoCaoDang',
    'TongSoCaoDangNu','TongSoKhac','TongSoKhacNu'];
  $scope.data2 = [
    {
      'Ten':'Tổng số: (I+II)',
      'TongSo' : 1540 ,
      'TongSoNu' : 673,
      'TongSoDanToc' : 10,
      'TongSoDanTocNu' : 6,
      'TongGiaoSu':3,
      'TongGiaoSuNu':1,
      'TongPhoGiaoSu':10,
      'TongPhoGiaoSuNu':0,
      'TongTienSi':110,
      'TongTienSiNu':20,
      'TongSoThacSi':765,
      'TongSoThacSiNu':339,
      'TongSoChuyenKhoaY':0,
      'TongSoChuyenKhoaYNu':0,
      'TongSoDaiHoc':419,
      'TongSoDaiHocNu':210,
      'TongSoCaoDang':40,
      'TongSoCaoDangNu':13,
      'TongSoKhac':206,
      'TongSoKhacNu':91,
      'isbold':true,
      'iscenter':true
    },
    {
      'Ten':'I- Cán bộ nhân viên:',
      'TongSo' : 506 ,
      'TongSoNu' : 222,
      'TongSoDanToc' : 3,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':3,
      'TongGiaoSuNu':1,
      'TongPhoGiaoSu':10,
      'TongPhoGiaoSuNu':0,
      'TongTienSi':39,
      'TongTienSiNu':4,
      'TongSoThacSi':66,
      'TongSoThacSiNu':14,
      'TongSoChuyenKhoaY':0,
      'TongSoChuyenKhoaYNu':0,
      'TongSoDaiHoc':163,
      'TongSoDaiHocNu':100,
      'TongSoCaoDang':35,
      'TongSoCaoDangNu':13,
      'TongSoKhac':203,
      'TongSoKhacNu':91,
      'isbold':true
    },
    {
      'Ten':'1- Cán bộ quản lý',
      'TongSo' : 127 ,
      'TongSoNu' : 25,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':3,
      'TongGiaoSuNu':1,
      'TongPhoGiaoSu':10,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':39,
      'TongTienSiNu':4,
      'TongSoThacSi':65,
      'TongSoThacSiNu':14,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':15,
      'TongSoDaiHocNu':6,
      'TongSoCaoDang':2,
      'TongSoCaoDangNu':null,
      'TongSoKhac':6,
      'TongSoKhacNu':1
    },
    {		
      'Ten':'Trong đó: Kiêm nhiệm giảng dạy',
      'TongSo' : 113 ,
      'TongSoNu' : 21,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':3,
      'TongGiaoSuNu':1,
      'TongPhoGiaoSu':10,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':39,
      'TongTienSiNu':4,
      'TongSoThacSi':64,
      'TongSoThacSiNu':14,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':10,
      'TongSoDaiHocNu':3,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'2- Cán bộ hành chính, nghiệp vụ, phục vụ (không bao gồm giảng viên )',
      'TongSo' : 232 ,
      'TongSoNu' : 130,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':null,
      'TongTienSiNu':null,
      'TongSoThacSi':1,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':146,
      'TongSoDaiHocNu':92,
      'TongSoCaoDang':21,
      'TongSoCaoDangNu':9,
      'TongSoKhac':64,
      'TongSoKhacNu':29
    },
    {
      'Ten':'Trong đó: Kiêm nhiệm giảng dạy',
      'TongSo' : 0 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':null,
      'TongTienSiNu':null,
      'TongSoThacSi':null,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':null,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'3- Nhân viên phục vụ',
      'TongSo' : 147 ,
      'TongSoNu' : 67,
      'TongSoDanToc' : 2,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':null,
      'TongTienSiNu':null,
      'TongSoThacSi':null,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':2,
      'TongSoDaiHocNu':2,
      'TongSoCaoDang':12,
      'TongSoCaoDangNu':4,
      'TongSoKhac':133,
      'TongSoKhacNu':61
    },
    {
      'Ten':'II- Giảng viên',
      'TongSo' : 1034 ,
      'TongSoNu' : 451,
      'TongSoDanToc' : 7,
      'TongSoDanTocNu' : 5,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':71,
      'TongTienSiNu':16,
      'TongSoThacSi':699,
      'TongSoThacSiNu':325,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':256,
      'TongSoDaiHocNu':110,
      'TongSoCaoDang':5,
      'TongSoCaoDangNu':null,
      'TongSoKhac':3,
      'TongSoKhacNu':null,
      'isbold':true
    },
    {
      'Ten':'1. Cơ hữu',
      'TongSo' : 956 ,
      'TongSoNu' : 421,
      'TongSoDanToc' : 4,
      'TongSoDanTocNu' : 3,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':66,
      'TongTienSiNu':15,
      'TongSoThacSi':640,
      'TongSoThacSiNu':302,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':242,
      'TongSoDaiHocNu':104,
      'TongSoCaoDang':5,
      'TongSoCaoDangNu':null,
      'TongSoKhac':3,
      'TongSoKhacNu':null
    },
    {		
      'Ten':'2. Hợp đồng có thời hạn',
      'TongSo' : 72 ,
      'TongSoNu' : 28,
      'TongSoDanToc' : 3,
      'TongSoDanTocNu' : 2,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':5,
      'TongTienSiNu':1,
      'TongSoThacSi':55,
      'TongSoThacSiNu':21,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':12,
      'TongSoDaiHocNu':6,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'3. Thử việc',
      'TongSo' : 6 ,
      'TongSoNu' : 2,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':null,
      'TongTienSiNu':null,
      'TongSoThacSi':4,
      'TongSoThacSiNu':2,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':2,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Giảng viên chia theo độ tuổi:',
      'TongSo' : 1034 ,
      'TongSoNu' : 451,
      'TongSoDanToc' : 7,
      'TongSoDanTocNu' : 5,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':71,
      'TongTienSiNu':16,
      'TongSoThacSi':699,
      'TongSoThacSiNu':325,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':256,
      'TongSoDaiHocNu':110,
      'TongSoCaoDang':5,
      'TongSoCaoDangNu':null,
      'TongSoKhac':3,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Dưới 30 tuổi',
      'TongSo' : 201 ,
      'TongSoNu' : 98,
      'TongSoDanToc' : 2,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':2,
      'TongTienSiNu':null,
      'TongSoThacSi':128,
      'TongSoThacSiNu':59,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':71,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':39,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Từ 31 đến 35',
      'TongSo' : 316 ,
      'TongSoNu' : 154,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':17,
      'TongTienSiNu':6,
      'TongSoThacSi':248,
      'TongSoThacSiNu':124,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':51,
      'TongSoDaiHocNu':24,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Từ 36 đến 40',
      'TongSo' : 224 ,
      'TongSoNu' : 95,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':17,
      'TongTienSiNu':3,
      'TongSoThacSi':160,
      'TongSoThacSiNu':75,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':47,
      'TongSoDaiHocNu':17,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Từ 41 đến 45',
      'TongSo' : 110 ,
      'TongSoNu' : 47,
      'TongSoDanToc' : 1,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':10,
      'TongTienSiNu':4,
      'TongSoThacSi':82,
      'TongSoThacSiNu':38,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':18,
      'TongSoDaiHocNu':5,
      'TongSoCaoDang':40,
      'TongSoCaoDangNu':13,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Từ 46 đến 50',
      'TongSo' : 82 ,
      'TongSoNu' : 31,
      'TongSoDanToc' : 2,
      'TongSoDanTocNu' : 1,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':8,
      'TongTienSiNu':1,
      'TongSoThacSi':9,
      'TongSoThacSiNu':16,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':33,
      'TongSoDaiHocNu':14,
      'TongSoCaoDang':1,
      'TongSoCaoDangNu':null,
      'TongSoKhac':1,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Từ 51 đến 55',
      'TongSo' : 72 ,
      'TongSoNu' : 26,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':7,
      'TongTienSiNu':2,
      'TongSoThacSi':32,
      'TongSoThacSiNu':13,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':27,
      'TongSoDaiHocNu':11,
      'TongSoCaoDang':4,
      'TongSoCaoDangNu':null,
      'TongSoKhac':2,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Từ 56 đến 60',
      'TongSo' : 27 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':8,
      'TongTienSiNu':null,
      'TongSoThacSi':10,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':9,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Trên 60 tuổi',
      'TongSo' : 2 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':2,
      'TongTienSiNu':null,
      'TongSoThacSi':null,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':null,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'Danh hiệu : Nhà giáo nhân dân',
      'TongSo' : 0 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':null,
      'TongTienSiNu':null,
      'TongSoThacSi':null,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':null,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'- Nhà giáo ưu tú',
      'TongSo' : 5 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':1,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':1,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':4,
      'TongTienSiNu':null,
      'TongSoThacSi':1,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':null,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null
    },
    {
      'Ten':'III-Giảng viên thỉnh giảng',
      'TongSo' : 0 ,
      'TongSoNu' : 0,
      'TongSoDanToc' : null,
      'TongSoDanTocNu' : null,
      'TongGiaoSu':null,
      'TongGiaoSuNu':null,
      'TongPhoGiaoSu':null,
      'TongPhoGiaoSuNu':null,
      'TongTienSi':null,
      'TongTienSiNu':null,
      'TongSoThacSi':null,
      'TongSoThacSiNu':null,
      'TongSoChuyenKhoaY':null,
      'TongSoChuyenKhoaYNu':null,
      'TongSoDaiHoc':null,
      'TongSoDaiHocNu':null,
      'TongSoCaoDang':null,
      'TongSoCaoDangNu':null,
      'TongSoKhac':null,
      'TongSoKhacNu':null,
      'isbold':true
    }
  ];

  $scope.headTable = `
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
    </tr>
    `;
}

/* @ngInject */
export default baocaolanhdaoController;