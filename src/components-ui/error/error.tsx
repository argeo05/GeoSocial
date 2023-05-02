import style from './error.module.scss'


interface Props {}

function Error(props: Props) {
   const {} = props

   return (
      <div>
         <link href='https://fonts.googleapis.com/css?family=Varela' rel='stylesheet' type='text/css'/>
         <div className={`${style.glitch}`} data-text="Error">Error</div> 
         <div className={`${style.glitch} ${style.glitchSmall}`} data-text="Error">Server does not response</div> 
      </div>
   )
}

export default Error
