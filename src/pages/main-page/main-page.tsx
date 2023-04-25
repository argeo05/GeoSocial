import Feed from "../../components/feed/feed"
import Navbar from "../../components/navbar/navbar"
import SideBlock from "../../components/side-block/side-block"
import index from '../../index.module.scss'
import style from './main-page.module.scss'

interface Props { }

function MainPage(props: Props) {
   const { } = props

   return (
      <div className={`${index.page} ${index.container}`}>
         <header className="header">
            <Navbar />
         </header>
         <main className={`${style.main}`}>
            <h1 className={`${index.visuallyHidden}`}>GeoSocial - tenth social site</h1>
            <Feed />
            <SideBlock />
         </main>
      </div >
   )
}

export { MainPage }
