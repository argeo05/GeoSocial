import "./app.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SiteRoutes } from "../../routes"
import PrivateRoute from "../private-route/private-route"
import ErrorPage from "../../pages/error-page/error-page"
import { HistoryRouter } from "../history-router/history-router"
import browserHistory from "../../browser-histrory"
import { getToken } from "../../services/token"
import { store } from "../../store/store"
import { checkAuthAction } from "../../store/api-action"

interface Props { }

if (getToken() != '') {
   store.dispatch(checkAuthAction())
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
