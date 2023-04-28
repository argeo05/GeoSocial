import LoginPage from "./pages/login-page/login-page";
import { MainPage } from "./pages/main-page/main-page";
import { ProfilePage } from "./pages/profile-page/profile-page";

enum AppRoute {
   Main = '/',
   Login = '/login',
   MyProfile = '/my-profile',
}

const SiteRoutes = [
   {
      path: AppRoute.Main,
      component: MainPage,
      isAuthRequired: false
   },
   {
      path: AppRoute.Login,
      component: LoginPage,
      isAuthRequired: false
   },
   {
      path: AppRoute.MyProfile,
      component: ProfilePage,
      isAuthRequired: true
   },
]

export {SiteRoutes, AppRoute}

