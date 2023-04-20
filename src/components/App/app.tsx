import React from 'react'
import Feed from '../feed/feed'
import Navbar from '../navbar/navbar'
import SideBlock from '../side-block/side-block'

interface Props { }

function App(props: Props) {
   const { } = props

   return (
      <>
         <Navbar />
         <Feed />
         <SideBlock/>
      </>
   )
}

export default App
