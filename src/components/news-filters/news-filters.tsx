import React from 'react'
import style from './news-filters.module.scss'

interface Props {}

function NewsFilters(props: Props) {
   const {} = props

   return (
      <ul className={`${style.newsFilters}`}>
         <li className={`${style.newsFilter} ${style.newsFilterActive}`}>Hot</li>
         <li className={`${style.newsFilter}`}>Random</li>
      </ul>
   )
}

export default NewsFilters
