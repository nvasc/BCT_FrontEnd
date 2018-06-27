//import google from 'google'

function baocaolanhdaoController ($scope, baocaolanhdaoService, $timeout, $document) {
  const vm = this;
  baocaolanhdaoService.init();

  //tạo dữ liệu giả cho báo cáo
  $scope.reportData = [
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

  //Theo trình độ đào tạo
  $scope.chartData_DaoTao = 
  {
    cols: [
      {'id':'Ten','label':'Tên','type':'string'},
      {'id':'TongSo','label':'Tổng số','type':'number'},
      {'id':'TongSoNu','label':'Tổng số Nữ','type':'number'}
    ],
    rows: [
      {c:[{v: 'Dân tộc ít người'},{v: 10},{v: 6}]},
      {c:[{v: 'Giáo sư'},{v: 3},{v: 1}]},
      {c:[{v: 'Phó giáo sư'},{v: 10},{v: 0}]},
      {c:[{v: 'TSKH và Tiến sĩ'},{v: 110},{v: 20}]},
      {c:[{v: 'Thạc sĩ'},{v: 765},{v: 339}]},
      {c:[{v: 'CK Y cấp I, II'},{v: 0},{v: 0}]},
      {c:[{v: 'Đại học'},{v: 419},{v: 210}]},
      {c:[{v: 'Cao đẳng'},{v: 40},{v: 13}]},
      {c:[{v: 'Khác'},{v: 206},{v: 91}]}
    ]
  }

  // $scope.chartData_DaoTao = [
  //   {
  //     'Ten':'Dân tộc ít người',
  //     'TongSo':10,
  //     'TongSoNu':6
  //   },
  //   {
  //     'Ten':'Giáo sư',
  //     'TongSo':3,
  //     'TongSoNu':1
  //   },
  //   {
  //     'Ten':'Phó giáo sư',
  //     'TongSo':10,
  //     'TongSoNu':0
  //   },
  //   {
  //     'Ten':'TSKH và Tiến sĩ',
  //     'TongSo':110,
  //     'TongSoNu':20
  //   },
  //   {
  //     'Ten':'Thạc sĩ',
  //     'TongSo':765,
  //     'TongSoNu':339
  //   },
  //   {
  //     'Ten':'CK Y cấp I, II',
  //     'TongSo':0,
  //     'TongSoNu':0
  //   },
  //   {
  //     'Ten':'Đại học',
  //     'TongSo':419,
  //     'TongSoNu':210
  //   },
  //   {
  //     'Ten':'Cao đẳng',
  //     'TongSo':40,
  //     'TongSoNu':13
  //   },
  //   {
  //     'Ten':'Khác',
  //     'TongSo':206,
  //     'TongSoNu':91
  //   }
  // ];

  //Theo độ tuổi
  $scope.chartData_DoTuoi = {
    cols: [
      {'id':'DoTuoi','label':'Độ tuổi','type':'string'},
      {'id':'TongSo','label':'Tổng số','type':'number'}
    ],
    rows: [
      {c:[{v: 'Dưới 30 tuổi'},{v: 201}]},
      {c:[{v: 'Từ 30 đến 35'},{v: 316}]},
      {c:[{v: 'Từ 36 đến 40'},{v: 224}]},
      {c:[{v: 'Từ 41 đến 45'},{v: 110}]},
      {c:[{v: 'Từ 46 đến 50'},{v: 82}]},
      {c:[{v: 'Từ 51 đến 55'},{v: 72}]},
      {c:[{v: 'Từ 56 đến 60'},{v: 27}]},
      {c:[{v: 'Trên 60 tuổi'},{v: 2}]}
    ]
  }
  //Theo cán bộ
  $scope.chartData_CanBo = {
    cols: [
      {'id':'CanBo','label':'Cán bộ','type':'string'},
      {'id':'TongSo','label':'Tổng số','type':'number'}
    ],
    rows: [
      {c:[{v: 'Cán bộ nhân viên'},{v: 506}]},
      {c:[{v: 'Giảng viên'},{v: 1034}]},
      {c:[{v: 'Giảng viên thỉnh giảng'},{v: 0}]}
    ]
  };
  //Theo nhân viên
  $scope.chartData_NhanVien = {
    cols: [
      {'id':'CanBoNhanVien','label':'Cán bộ nhân viên','type':'string'},
      {'id':'TongSo','label':'Tổng số','type':'number'}
    ],
    rows: [
      {c:[{v: 'Cán bộ quản lý'},{v: 127}]},
      {c:[{v: 'Trong đó: Kiêm nhiệm giảng dạy'},{v: 113}]},
      {c:[{v: 'Cán bộ hành chính, nghiệp vụ, phục vụ (không bao gồm giảng viên )'},{v: 232}]},
      {c:[{v: 'Trong đó: Kiêm nhiệm giảng dạy'},{v: 0}]},
      {c:[{v: 'Nhân viên phục vụ'},{v: 147}]}
    ]
  };
  //Theo giảng viên
  $scope.chartData_GiangVien = {
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
  
  //Tab
  $scope.tab = 1;

  $scope.setTab = function(newTab) {
    $scope.tab = newTab;
  };

  $scope.isSet = function(tabNum) {
    return $scope.tab === tabNum;
  };

  //column map dữ liệu
  $scope.cols = ['Ten','TongSo','TongSoNu','TongSoDanToc','TongSoDanTocNu','TongGiaoSu',
    'TongGiaoSuNu',
    'TongPhoGiaoSu','TongPhoGiaoSuNu','TongTienSi','TongTienSiNu','TongSoThacSi','TongSoThacSiNu',
    'TongSoChuyenKhoaY','TongSoChuyenKhoaYNu','TongSoDaiHoc','TongSoDaiHocNu','TongSoCaoDang',
    'TongSoCaoDangNu','TongSoKhac','TongSoKhacNu'];

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
    </tr>`;
}

/* @ngInject */
export default baocaolanhdaoController;