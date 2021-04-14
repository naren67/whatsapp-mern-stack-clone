import { Avatar } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
          return (
                    <div className='chat'>
                            <div className="chat__header">
                                   <div className="chat__headerLeft">
                                        <Avatar className='chat__headerAvatarIcon' style={{ fontSize: 38 }}/>
                                        <div className="chat__headerInfo">
                                                <p>group name</p>
                                                <p>last seen...</p>
                                        </div>     
                                   </div>   
                                   <div className="chat__headerRight">
                                           <div className="chat__headerRightSearch">
                                                     <SearchIcon  className='chat__headerIcon' style={{ fontSize: 20 }}/>
                                           </div>
                                           <div className="chat__headerRightMore">
                                                  <MoreVertIcon  className='chat__headerIcon' style={{ fontSize: 20 }}/>
                                           </div>
                                   </div> 

                            </div>  
                            <div className="chat__body">
                                    <p className='chat__userInfo'>
                                            <span className='chat__name'>naren</span>
                                            this is a test messge
                                            <span className='chat__time'>
                                                    {new Date().toUTCString()}
                                            </span>
                                    </p>
                            </div>
                    </div>
          )
}

export default Chat
