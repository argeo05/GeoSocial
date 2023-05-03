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
   const authStatus = useSelector(getAuthStatus)
   const user = useSelector(getUser)


   let userName = user?.name

   if (userName && userName.length > 10) {
      userName = userName.slice(0, 10) + '...'
   }

   const onLogoutClick = () => {
      dispatch(logoutAction())
   }

   return (
      <div className={`${navbar.container}`}>
         <div className={`${navbar.top}`}>
            <Link to={''}>
               <div className={`${navbar.logo}`}>
                  <img className={`${navbar.logoImage}`} src='img/logo.png' width='100px' height='40px' />
               </div>
            </Link>

            {authStatus == AuthStatus.Auth ?
               <Link to={AppRoute.MyProfile} onClick={onLogoutClick}>
                  <div className={`${navbar.user}`}>
                     <span className={`${navbar.userName}`} >{userName}</span>
                     <img className={`${navbar.userImage}`}
                        src='https://td.chem.msu.ru/uploads/pics/xblank_profile_male.jpg.pagespeed.ic.GT6tx4HZ-s.jpg'
                        width='35px' height='35px'
                     />
                  </div>
               </Link>
               : null
            }
            {authStatus == AuthStatus.Unauth ?
               <div className={`${navbar.user}`}>
                  <Link to={AppRoute.Login} className={`${navbar.userName} ${navbar.userNameNotLogged}`}>Login</Link>
               </div>
               : null
            }
            {authStatus == AuthStatus.Unknown ?
               <div className={`${navbar.user}`}>
                  <Link to={AppRoute.Main} className={`${navbar.userName} ${navbar.userNameNotLogged}`}>Loading</Link>
               </div>
               : null
            }

         </div>
         <nav className={`${navbar.nav}`}>
            <ul className={`${navbar.navList}`}>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkHome}`} to='/'>Home</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkProfile}`} to={AppRoute.MyProfile}>Profile</Link>
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
