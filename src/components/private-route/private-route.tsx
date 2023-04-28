import React from 'react'
import { Navigate } from 'react-router-dom'
import { AppRoute } from '../../routes'

type Props = {
   component: JSX.Element
}

function PrivateRoute(props: Props) {
   const { component } = props
   const isAuth = false

   if (!isAuth) {
      return <Navigate to={AppRoute.Login} />
   }

   return component
}

export default PrivateRoute
