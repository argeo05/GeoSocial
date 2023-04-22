import Feed from "../../components/feed/feed"
import Navbar from "../../components/navbar/navbar"
import SideBlock from "../../components/side-block/side-block"
import style from '../../global.module.scss'

interface Props {}

function MainPage(props: Props) {
   const {} = props

   return (
      <div className={`page ${style.container}`}>
         <header className="header">
            <Navbar />
         </header>
         <main>
            <Feed />
            <SideBlock />
         </main>
      </div>
   )
}

export { MainPage }
