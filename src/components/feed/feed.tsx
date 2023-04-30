import React from 'react'
import { useEffect } from 'react';
import style from './feed.module.scss'
import index from '../../index.module.scss'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../routes'
import Loading from '../../components-ui/loading/loading'
import { AppDispatch } from '../../types/state'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import DailyPhoto from '../daily-photo/daily-photo';


interface Props { }

function Feed(props: Props) {
   const { } = props
   const photoSrc = '../../../public/img/avatar.png'
   const dispatch: AppDispatch = useDispatch()

   return (
      <section className={`${style.container}`}>
         <h2 className={`${index.visuallyHidden}`}>Основная секция</h2>
         <article className={`${style.dailyBlock}`} >
            <div className={`${style.dailyPhoto}`}>
               <h3 className={`${style.dailyyPhotoLabel}`}>Фото дня</h3>
               <div className={`${style.dailyPhotoLabel}`}>
                  <DailyPhoto/>
               </div>
               
            </div>
         </article>
         <div className={`${style.newsBlock}`}>
            <ul className={`${style.newsFilters}`}>
               <li className={`${style.newsFilter}`}>Newest</li>
               <li className={`${style.newsFilter}`}>Most popular</li>
            </ul>
            <article className={`${style.post}`}>
               <div className={`${style.postUser}`}>
                  <Link to={AppRoute.MyProfile} className={`${style.userName}`} >UserName</Link>
                  <img className={`${style.userImage}`} src='img/avatar.png' width='35px' height='35px' />
               </div>
               <div className={`${style.postText}`}>
                  <p className={`${style.postParagraph}`}>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's: bit.ly/2kvf6yj
                  </p>
                  {
                     photoSrc ?
                        <img className={`${style.postImage}`} src={photoSrc} /> :
                        null
                  }
               </div>
               <div className={`${style.postControl}`}>
                  <button className={`${style.postLike}`}>Like</button>
                  <button className={`${style.postReport}`}>Report</button>
               </div>
            </article>
         </div>
      </section>
   )
}

export default Feed
