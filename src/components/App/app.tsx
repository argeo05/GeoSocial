import "./app.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SiteRoutes } from "../../routes"
import PrivateRoute from "../private-route/private-route"
import ErrorPage from "../../pages/error-page/error-page"

interface Props { }

function App(props: Props) {
   const { } = props

   return (
      <BrowserRouter>
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

      </BrowserRouter>
   )
}

export default App
