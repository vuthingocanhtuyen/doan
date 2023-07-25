export const navigations = [
  { label: 'Hệ thống', type: 'label' },
  { name: 'Hệ thống', 
    icon: 'home',
    children:[
    { name: 'Đăng xuất', iconText: 'SI', path: '/session/signin'  },
    { name: 'Đổi mật khẩu', iconText: 'FP', path: '/session/forgot-password' },
    { name: 'Tham số hệ thống', iconText: 'P', path: '/thamso/thamsohethong' },
    { name: 'Thông tin người dùng', iconText: 'UP', path: '/session/userprofile' },
  ]
  },
  { name: 'Quản lý NSD và Quyền', 
    icon: 'dashboard',
    children:[
    { name: 'Quản lý phân quyền', iconText: 'PQ', path: '/HeThong/QLPQ' },
    { name: 'Phần quyền cho NSD', iconText: 'NSD', path: '/HeThong/PQNSD' },
     ]
  },
  { label: 'Quản lý danh mục', type: 'label' },
  {
    name: 'Tổ chức và nhân sự',
    icon: 'person',
    children: [
      { name: 'Danh mục cấp bậc', iconText: 'CB', path: '/session/signin' },
      { name: 'Danh mục chức danh', iconText: 'CD',  path: '/material/autocomplete' },
      { name: 'Danh mục học hàm', iconText: 'HH', path: '/session/forgot-password' },
      { name: 'Danh mục học vị', iconText: 'HV', path: '/session/404' },
      { name: 'Danh mục C.Danh CMKT', iconText: 'CMKT',  path: '/material/checkbox' },
      { name: 'Danh mục Loại đơn vị', iconText: 'DV',  path: '/material/dialog' },
      { name: 'DM hình thức khen thưởng', iconText: 'KT', path: '/material/expansion-panel' },
      { name: 'DM hình thức kỷ luật', iconText: 'KL', path: '/material/form' },
     
    ]
  },
  {
    name: 'Danh mục chung',
    icon: 'menu',
    children: [
      { name: 'Danh mục Tỉnh', iconText: 'T', path:  '/material/switch' },
      { name: 'Danh mục Huyện', iconText: 'H', path: '/session/signup' },
      { name: 'Danh mục Xã', iconText: 'X', path: '/session/forgot-password' },
      { name: 'Danh mục Dân tộc', iconText: 'DT', path: '/session/404' },
      { name: 'Danh mục Tôn giáo', iconText: 'TG', path:  '/material/icons' },
      { name: 'Danh mục C.Danh CMKT', iconText: 'CD', path:  '/material/menu' },
      { name: 'Danh mục Khu vực ƯT', iconText: 'KV', path: '/material/progress' },
      { name: 'Danh mục Chế độ ƯT', iconText: 'CD', path:  '/material/radio' },
      
    ]
  },
  {
    name: 'Công tác đào tạo',
    icon: 'folder',
    children: [
      { name: 'Bậc đào tạo', iconText: 'BDT', path:  '/material/slider' },
      { name: 'Hệ đào tạo', iconText: 'HDT', path: '/session/signup' },
      { name: 'Loại hình đào tạo', iconText: 'LH', path: '/session/forgot-password' },
      { name: 'Hình thức Giảng dạy', iconText: 'HT', path: '/session/forgot-password' },
      { name: 'Hình thức thi', iconText: 'T', path: '/session/forgot-password' },
      { name: 'Khu vực giảng đường', iconText: 'KV', path:  '/material/snackbar' },
      { name: 'Danh mục Giảng đường', iconText: 'DM', path:  '/material/table'},
      
    ]
  },

  { label: 'Quản lý đơn vị', type: 'label' },
  {
    name: 'Danh mục đơn vị',
    icon: 'vertical_split',
    path: '/DanhMucDonVi'
   
  },
  {
    name: 'Hồ sơ CBGV',
    icon: 'people',
    path: '/QuanLyDonVi/HoSoCBGV'
  },
  {
    name: 'Tìm kiếm hồ sơ CBGV',
    icon: 'search',
    type: 'extLink',
    path: '/charts/echarts'
  },
  {
    name: 'Quản lý nhu cầu/biên chế',
    icon: 'edit',
    type: 'extLink',
    path: '/charts/echarts'
  },
  { label: 'Định mức và nội dung báo cáo hằng năm', type: 'label' },
  { name: 'Định mức', 
    icon: 'list',
    path:'/dinhmuc'
  },
  { name: 'Quy ra giờ chuẩn', 
  icon: 'date_range',
  children:[
  { name: 'Công tác giảng dạy', iconText: 'SI', path: '/GioChuan/GiangDay'  },
  { name: 'Công tác NCKH', iconText: 'SI', path: '/GioChuan/NCKH' },
  
]
},
  { name: 'Nội dung báo cáo', 
    icon: 'analytics',
    children:[
      { name: 'Tải giảng dạy', iconText: 'SI', path: '/HeThong/QLPQ' },
      { name: 'Tải hướng dẫn', iconText: 'SI', path: '/HeThong/QLPQ' },
      { name: 'Tải khảo thí', iconText: 'SI', path: '/HeThong/QLPQ' },
      { name: 'Tải hội đồng', iconText: 'SI', path: '/NDBC/TaiHoiDong' },
      
      { name: 'Tải NCKH', iconText: 'SI', path: '/HeThong/QLPQ' },

     ]
  },
  { label: 'Báo cáo tổng hợp', type: 'label' },



  
  { label: 'Trợ giúp', type: 'label' },
  {
    name: 'Hướng dẫn sử dụng',
    icon: 'help',
    path: '/dashboard/default'
   
  },
  {
    name: 'Đơn vị phát triển',
    icon: 'trending_up',
    path: '/charts/echarts'
  },
  {
    name: 'Phản hồi',
    icon: 'launch',
    type: 'extLink',
    path: '/charts/echarts'
  }
];
