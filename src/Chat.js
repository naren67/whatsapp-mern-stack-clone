import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Chat.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios'

function Chat({messageSent}) {

        const [input,setInput] = useState("")

        const sendMessage = async (e) =>{
               e.preventDefault()
              
              await axios.post('/message/new',{
                name:"killer",
                message: input,
                timestamp:"demo timestamp",
                receiver: false
               })

               setInput('')
        }

        console.log(input)

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
                                                    message from sender,just to check whether the css is perfect or not
                                                <span className='chat__time'>
                                                {new Date().toUTCString()}
                                                </span>
                                         </p>

                                         
                            <p className='chat__userInfo chat__reciever'>
                                                <span className='chat__name'>naren</span>
                                                message from receiver,just to check whether the css is perfect or not
                                                <span className='chat__time'>
                                                {new Date().toUTCString()}
                                                </span>
                                         </p>
                                   
                                   {/* //maping  //className of reciever 'chat__reciever' */}
                                       {messageSent.map((data)=>(

                                         <p className={`chat__userInfo ${data.receiver && 'chat__reciever'}`}>
                                                <span className='chat__name'>{data.name}</span>
                                                    {data.message}
                                                <span className='chat__time'>
                                                        {/* {new Date().toUTCString()} */}
                                                        {data.timestamp}
                                                </span>
                                         </p>
    
                                       ))}

                            </div>
                            <div className="chat__footer">
                                    <div className="chat__emoji">
                                             <EmojiEmotionsIcon className='chat__footerIcon' style={{ fontSize: 25 }}/>
                                    </div>
                                    <div className="chat__pin">
                                              <AttachFileIcon className='chat__footerIcon chat__footerAttachIcon' style={{ fontSize: 25 }}/>
                                    </div>
                                    <form className='chat__footerForm'>
                                            <input value={input} onChange={e => setInput(e.target.value)} type="text" className='chat__footerIcon' placeholder='Type a message'/>
                                            <button onClick={sendMessage}>send</button>
                                    </form>
                                    <div className="chat__mic">
                                           <MicIcon className='chat__footerIcon' style={{ fontSize: 25 }}/> 
                                    </div>
                            </div>
                    </div>
          )
}

export default Chat
