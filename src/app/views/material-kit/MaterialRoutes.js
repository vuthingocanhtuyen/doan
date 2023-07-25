import { lazy } from 'react';
import Loadable from 'app/components/Loadable';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));
const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const AppButton = Loadable(lazy(() => import('./buttons/AppButton')));
const AppIcon = Loadable(lazy(() => import('./icons/AppIcon')));
const AppProgress = Loadable(lazy(() => import('./AppProgress')));
const AppMenu = Loadable(lazy(() => import('./menu/AppMenu')));
const AppCheckbox = Loadable(lazy(() => import('./checkbox/AppCheckbox')));
const AppSwitch = Loadable(lazy(() => import('./switch/AppSwitch')));
const AppRadio = Loadable(lazy(() => import('./radio/AppRadio')));
const AppSlider = Loadable(lazy(() => import('./slider/AppSlider')));
const AppDialog = Loadable(lazy(() => import('./dialog/AppDialog')));
const AppSnackbar = Loadable(lazy(() => import('./snackbar/AppSnackbar')));
const AppAutoComplete = Loadable(lazy(() => import('./auto-complete/AppAutoComplete')));
const AppExpansionPanel = Loadable(lazy(() => import('./expansion-panel/AppExpansionPanel')));


const ThamSo=Loadable(lazy(()=>import('../HeThong/ThamSoHeThong/thamso')))
const UserProfile= Loadable(lazy(()=> import('../sessions/UserProfile'))) 
const ForgotPassword = Loadable(lazy(() => import('../sessions/ForgotPassword')));
const QLPQ= Loadable(lazy(()=> import('../HeThong/NSD_Quyen/QLPQ/index')))
const PQNSD= Loadable(lazy(()=> import('../HeThong/NSD_Quyen/QuyenNSD/User')))

const HoSo=Loadable(lazy(()=> import('../QuanLyDonVi/HoSoCBGV/index')))

const DinhMuc =Loadable(lazy(()=> import('../DinhMuc/AppDinhMuc')))
const GioChuanNCKH =Loadable(lazy(()=> import('../QuyGioChuan/NCKH/AppNCKH')))
const GioChuanGD =Loadable(lazy(()=> import('../QuyGioChuan/GiangDay/AppGiangDay')))

const TaiHoiDong =Loadable(lazy(()=> import('../NoiDungBaoCao/TaiHoiDong/AppHoiDong')))

const DanhMucDonVi =Loadable(lazy(()=> import('../DMDonVi/AppDMDonVi')))

const materialRoutes = [
  { path: '/material/table', element: <AppTable /> },
  { path: '/material/form', element: <AppForm /> },
  { path: '/material/buttons', element: <AppButton /> },
  { path: '/material/icons', element: <AppIcon /> },
  { path: '/material/progress', element: <AppProgress /> },
  { path: '/material/menu', element: <AppMenu /> },
  { path: '/material/checkbox', element: <AppCheckbox /> },
  { path: '/material/switch', element: <AppSwitch /> },
  { path: '/material/radio', element: <AppRadio /> },
  { path: '/material/slider', element: <AppSlider /> },
  { path: '/material/autocomplete', element: <AppAutoComplete /> },
  { path: '/material/expansion-panel', element: <AppExpansionPanel /> },
  { path: '/material/dialog', element: <AppDialog /> },
  { path: '/material/snackbar', element: <AppSnackbar /> },

  {path:'/thamso/thamsohethong', element:<ThamSo/>},
  { path: '/session/userprofile', element: <UserProfile /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  {path: '/HeThong/QLPQ', element:<QLPQ/>},
  {path: '/HeThong/PQNSD', element:<PQNSD/>},
  
  {path: '/QuanLyDonVi/HoSoCBGV', element:<HoSo/>},

  {path: '/dinhmuc', element:<DinhMuc/>},
  {path: '/GioChuan/NCKH', element:<GioChuanNCKH/>},
  {path: '/GioChuan/GiangDay', element:<GioChuanGD/>  },
  {path: '/NDBC/TaiHoiDong', element:<TaiHoiDong/>},

  {path:'/DanhMucDonVi', element:<DanhMucDonVi/>}
];

export default materialRoutes;
