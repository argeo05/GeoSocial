import React from 'react'
import style from './feed.module.scss'
import index from '../../index.module.scss'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../routes'

interface Props { }

function Feed(props: Props) {
   const { } = props
   const photoSrc = '../../../public/img/avatar.png'

   return (
      <section className={`${style.container}`}>
         <h2 className={`${index.visuallyHidden}`}>Основная секция</h2>
         <article className={`${style.dayBlock}`} >
            <div className={`${style.dayPhoto}`}>
               <h3 className={`${style.dayPhotoLabel}`}>Фото дня</h3>
               <img src='img/avatar.png' className={`${style.dayPhotoImg}`} width='500px' height='200px'/>
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
