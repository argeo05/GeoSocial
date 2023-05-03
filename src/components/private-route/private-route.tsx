import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppRoute } from '../../routes'
import { getAuthStatus } from '../../store/user-slice/selectors'
import { AuthStatus } from '../../utils/const'

type Props = {
   component: JSX.Element
}

function PrivateRoute(props: Props) {
   const { component } = props
   const isAuth = useSelector(getAuthStatus) == AuthStatus.Auth

   if (!isAuth) {
      return <Navigate to={AppRoute.Login} />
   }

   return component
}

export default PrivateRoute
