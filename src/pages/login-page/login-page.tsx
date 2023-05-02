import React from 'react'
import Login from '../../components/login/login'
import Navbar from '../../components/navbar/navbar'
import index from '../../index.module.scss'
import style from './login-page.module.scss'
interface Props {}

function LoginPage(props: Props) {
   const {} = props

   return (
      <div className={`${index.page} ${index.container}`}>
         <header className={`${style.header}`}>
            <Navbar />
         </header>
         <main className={`${style.main}`}>
            <h1 className={`${index.visuallyHidden}`}>GeoSocial - Login</h1>
            <Login/>
         </main>
      </div >
   )
}

export default LoginPage
