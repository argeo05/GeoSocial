import React from 'react'
import style from './error-page.module.scss'

interface Props {}

function ErrorPage(props: Props) {
   const {} = props

   return (
      <img className={`${style.img}`} src={`https://http.cat/404`} />
   )
}

export default ErrorPage
