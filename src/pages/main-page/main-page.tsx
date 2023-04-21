import Feed from "../../components/feed/feed"
import Navbar from "../../components/navbar/navbar"
import SideBlock from "../../components/side-block/side-block"

interface Props {}

function MainPage(props: Props) {
   const {} = props

   return (
      <div>
         <Navbar />
         <Feed />
         <SideBlock />
      </div>
   )
}

export { MainPage }
