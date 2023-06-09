import React, { useEffect } from 'react'
import { AppDispatch } from '../../types/state'
import { useDispatch, useSelector } from 'react-redux'
import { getDailyPhoto, getIsDailyPhotoError, getIsDailyPhotoLoading } from '../../store/main-slice/selectors'
import { fetchRandomPhotoAction } from '../../store/api-action';
import style from './daily-photo.module.scss'
import Loading from '../../components-ui/loading/loading';
import Error from '../../components-ui/error/error';

interface Props { }

function DailyPhoto(props: Props) {
   const dispatch: AppDispatch = useDispatch()
   const isDailyPhotoLoading = useSelector(getIsDailyPhotoLoading)
   const isDailyPhotoError = useSelector(getIsDailyPhotoError)
   const dailyPhoto = useSelector(getDailyPhoto)

   useEffect(() => {
      dispatch(fetchRandomPhotoAction())
   }, [])

   return (
      <div className={`${style.dailyBlock}`
      }>
         {
            isDailyPhotoLoading ?
               <Loading height='320px' />
               : isDailyPhotoError ?
                  <Error />
                  :
                  <>
                     <img src={dailyPhoto?.image} className={`${style.dailyPhoto}`} height='320px' />
                     <p className={`${style.dailyFact}`}>{dailyPhoto?.fact}</p>
                  </>
         }

      </div>

   )
}

export default DailyPhoto