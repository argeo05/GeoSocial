import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../store/api-action'
import { LoginData } from '../../types/common'
import { AppDispatch } from '../../types/state'
import style from './login.module.scss'

interface Props { }

function Login(props: Props) {
   const dispatch = useDispatch<AppDispatch>()
   const { } = props

   const [loginData, setLoginData] = useState<LoginData>({password:'', email:''})

   const onPasswordInput = (evt: React.FormEvent<HTMLInputElement>) => {
      setLoginData({ ...loginData, password: evt.currentTarget.value })
   }

   const onEmailInput = (evt: React.FormEvent<HTMLInputElement>) => {
      setLoginData({ ...loginData, email: evt.currentTarget.value })
   }

   const onSubmit = (evt: React.FormEvent) => {
      evt.preventDefault()
      dispatch(loginAction(loginData))
   }

   return (
      <div className={`${style.container}`}>
         <form className={`${style.form}`} onSubmit={onSubmit}>
            <div className={`${style.control}`}>
               <h2 className={style.h2}>
                  Login
               </h2>
            </div>
            <div className={`${style.control} ${style.blockCube} ${style.blockInput}`}>
               <input name="username" type='email' placeholder='Email'
                  value={loginData.email} onInput={onEmailInput}
               />
               <div className={`${style.bgTop}`}>
                  <div className={`${style.bgInner}`} />
               </div>
               <div className={`${style.bgRight}`}>
                  <div className={`${style.bgInner}`} />
               </div>
               <div className={`${style.bg}`}>
                  <div className={`${style.bgInner}`} />
               </div>
            </div>
            <div className={`${style.control} ${style.blockCube} ${style.blockInput}`}>
               <input name="password" type='password' placeholder='Password'
                  value={loginData.password} onInput={onPasswordInput}
               />
               <div className={`${style.bgTop}`}>
                  <div className={`${style.bgInner}`} />
               </div>
               <div className={`${style.bgRight}`}>
                  <div className={`${style.bgInner}`} />
               </div>
               <div className={`${style.bg}`}>
                  <div className={`${style.bgInner}`} />
               </div>
            </div>
            <button type='submit' className={`${style.btn} ${style.blockCube} ${style.blockCubeHover}`}        >
               <div className={`${style.bgTop}`}>
                  <div className={`${style.bgInner}`} />
               </div>
               <div className={`${style.bgRight}`}>
                  <div className={`${style.bgInner}`} />
               </div>
               <div className={`${style.bg}`}>
                  <div className={`${style.bgInner}`} />
               </div>
               <div className={`${style.text}`}>
                  Log In
               </div>
            </button >
         </form >
         <p className={`${style.warning}`}>
            The server api supports authorization only.<br/>
            This means that registration is not necessary,<br/>
            and data about your account is stored only while the token is alive.
         </p>
      </div>
   )
}

export default Login
