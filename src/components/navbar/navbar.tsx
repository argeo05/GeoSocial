import React from 'react'
import { Link } from 'react-router-dom'
import navbar from './navbar.module.scss'

interface Props { }

function Navbar(props: Props) {
   const { } = props
   const isAuth = true
   const userName = 'UserName'
   return (
      <div className={`${navbar.cotainer}`}>
         <div className={`${navbar.top}`}>
            <div className={`${navbar.logo}`}>
               <img className={`${navbar.logoImage}`} src='img/logo.png' width='100px' height='40px' />
            </div>
            <div className={`${navbar.user}`}>
               <img className={`${navbar.userImage}`} src='img/avatar.png' width='50px' height='50px' />
               <span className={`${navbar.userImage}`}>{userName}</span>
            </div>
         </div>
         <nav className={`${navbar.nav}`}>
            <ul className={`${navbar.navList}`}>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkHome}`} to='/'>Home</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkProfile}`} to='/'>Profile</Link>
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
