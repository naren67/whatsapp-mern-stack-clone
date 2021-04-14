import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChats.css'

function SidebarChats() {
          return (
                    <div className='sidebarChats'>
                             <Avatar/> 
                             <div className="sidebarChats__info">
                                       <p>david copperfield</p>
                                       <p>Ena da panura naya</p>
                             </div>
                    </div>
          )
}

export default SidebarChats
