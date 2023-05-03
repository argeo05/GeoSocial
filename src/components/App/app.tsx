import "./app.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SiteRoutes } from "../../routes"
import PrivateRoute from "../private-route/private-route"
import ErrorPage from "../../pages/error-page/error-page"
import { HistoryRouter } from "../history-router/history-router"
import browserHistory from "../../browser-histrory"
import { EMPTY_TOKEN, getToken } from "../../services/token"
import { store } from "../../store/store"
import { checkAuthAction } from "../../store/api-action"
import { setAuthStatus } from "../../store/user-slice/user-slice"
import { AuthStatus } from "../../utils/const"

interface Props { }

if (getToken() !== EMPTY_TOKEN) {
   store.dispatch(checkAuthAction())
} else {
   store.dispatch(setAuthStatus(AuthStatus.Unauth))
}

function App(props: Props) {
   const { } = props

   return (
      <HistoryRouter history={browserHistory}>
         <Routes>
            {SiteRoutes.map(({ path, component: Component, isAuthRequired }) => isAuthRequired ?
               <Route key={path} path={path} element={
                  <PrivateRoute component={<Component/>}/>
               } />
               :
               <Route key={path} path={path} Component={Component} />
            )
            }
            <Route path='*' Component={ErrorPage} />
         </Routes>

      </HistoryRouter>
   )
}

export default App
