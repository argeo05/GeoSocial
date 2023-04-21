import React from 'react'
import { Navigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../utils/const'

type Props = {
   component: JSX.Element
}

function PrivateRoute(props: Props) {
   const { component } = props
   const isAuth = false

   if (!isAuth) {
      return <Navigate to={LOGIN_ROUTE} />
   }

   return component
}

export default PrivateRoute
