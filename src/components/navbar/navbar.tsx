import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../routes'
import { logoutAction } from '../../store/api-action'
import { getAuthStatus, getUser } from '../../store/user-slice/selectors'
import { AppDispatch } from '../../types/state'
import { AuthStatus } from '../../utils/const'
import navbar from './navbar.module.scss'

interface Props { }

function Navbar(props: Props) {
   const { } = props
   const dispatch = useDispatch<AppDispatch>()
   const isAuth = useSelector(getAuthStatus) == AuthStatus.Auth
   const user = useSelector(getUser)

   const userName = (user?.name.length ?? 0) > 10 ? user?.name.slice(0, 10) + '...' : user?.name
   
   const onLogoutClick = () => {
      dispatch(logoutAction())
   }

   return (
      <div className={`${navbar.container}`}>
         <div className={`${navbar.top}`}>
            <div className={`${navbar.logo}`}>
               <img className={`${navbar.logoImage}`} src='img/logo.png' width='100px' height='40px' />
            </div>
            {isAuth ? 
               <Link to={AppRoute.MyProfile} onClick={onLogoutClick}>
                  <div className={`${navbar.user}`}>
                     <span className={`${navbar.userName}`} >{userName}</span>
                     <img className={`${navbar.userImage}`} src={user?.avatarUrl} width='35px' height='35px' />
                  </div>
               </Link>
                :
               <div className={`${navbar.user}`}>
                  <Link to={AppRoute.Login} className={`${navbar.userName} ${navbar.userNameNotLogged}`}>Login</Link>
               </div>
            }
            
         </div>
         <nav className={`${navbar.nav}`}>
            <ul className={`${navbar.navList}`}>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkHome}`} to='/'>Home</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkProfile}`} to={ AppRoute.MyProfile }>Profile</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkExplore}`} to='/'>Explore</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkNotifications}`} to='/'>Notifications</Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navbar
