import React, { useEffect } from 'react'
import { AppDispatch } from '../../types/state'
import { useDispatch, useSelector } from 'react-redux'
import { getDailyPhoto, getIsDailyPhotoError, getIsDailyPhotoLoading } from '../../store/main-slice/selectors'
import { fetchRandomPhoto } from '../../store/api-action';
import style from './daily-photo.module.scss'
import Loading from '../../components-ui/loading/loading';

interface Props { }

function DailyPhoto(props: Props) {
   const dispatch: AppDispatch = useDispatch()
   const isDailyPhotoLoading = useSelector(getIsDailyPhotoLoading)
   const isDailyPhotoError = useSelector(getIsDailyPhotoError)
   const dailyPhoto = useSelector(getDailyPhoto)

   useEffect(() => {
      dispatch(fetchRandomPhoto())
   }, [])

   return (
      <div className={`${style.dailyBlock}`
      }>
         {
            isDailyPhotoLoading ?
               <Loading height='150px' />
               :
               <img src={dailyPhoto?.image} className={`${style.dailyPhoto}`} height='320px' />
         }
         <p className={`${style.dailyFact}`}>{dailyPhoto?.fact}</p>
      </div>

   )
}

export default DailyPhoto