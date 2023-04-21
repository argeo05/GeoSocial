import LoginPage from "./pages/login-page/login-page";
import { MainPage } from "./pages/main-page/main-page";
import { ProfilePage } from "./pages/profile-page/profile-page";
import { LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from "./utils/const";

export const SiteRoutes = [
   {
      path: MAIN_ROUTE,
      component: MainPage,
      isAuthRequired: false
   },
   {
      path: LOGIN_ROUTE,
      component: LoginPage,
      isAuthRequired: false
   },
   {
      path: PROFILE_ROUTE,
      component: ProfilePage,
      isAuthRequired: true
   },
]