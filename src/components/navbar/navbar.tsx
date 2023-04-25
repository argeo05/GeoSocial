import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE, PROFILE_ROUTE } from '../../utils/const'
import navbar from './navbar.module.scss'

interface Props { }

function Navbar(props: Props) {
   const { } = props
   const [isAuth, setIsAuth] = useState(false)
   let userName = 'UserNameee'
   if (userName.length > 9) {
      userName = userName.slice(0, 8) + '...'
   }
   const onClickHandle = () => {
      setIsAuth(!isAuth)
   }
   return (
      <div className={`${navbar.cotainer}`}>
         <div className={`${navbar.top}`}>
            <div className={`${navbar.logo}`}>
               <img className={`${navbar.logoImage}`} src='img/logo.png' width='100px' height='40px' />
            </div>
            { isAuth ? 
               <div className={`${navbar.user}`}>
                  <Link to={PROFILE_ROUTE} className={`${navbar.userName}`} >{userName}</Link>
                  <img className={`${navbar.userImage}`} src='img/avatar.png' width='35px' height='35px' />
               </div> :
               <div className={`${navbar.user}`}>
                  <Link to={LOGIN_ROUTE} className={`${navbar.userName} ${navbar.userNameNotLogged}`}>Login</Link>
               </div>
            }
            
         </div>
         <nav className={`${navbar.nav}`}>
            <ul className={`${navbar.navList}`}>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkHome}`} to='/'>Home</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkProfile}`} to={ PROFILE_ROUTE }>Profile</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkExplore}`} to='/'>Explore</Link>
               </li>
               <li className={`${navbar.navLi}`} >
                  <Link className={`${navbar.navLink}  ${navbar.navLinkNotifications}`} to='/'>Notifications</Link>
               </li>
            </ul>
         </nav>
         <button onClick={onClickHandle}>Change Auth status</button>
      </div>
   )
}

export default Navbar
