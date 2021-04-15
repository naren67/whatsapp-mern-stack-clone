import './App.css';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import axios from './axios.js'

function App() {

  const [messageSent,setmessageSent] = useState([])

  useEffect(()=>{
         axios.get('/message/sync')
         .then(response=>{

           setmessageSent(response.data)
         })
  },[])

  console.log(messageSent)

  useEffect(()=>{
    const pusher = new Pusher('36eabe34aa32764b7d33', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
                                    //new message from user
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
         //updating as soon as a user sent
      setmessageSent([...messageSent,data])
    });

    return ()=>{
      channel.unbind()
      channel.unsubscribe()
    }

  },[messageSent])


  return (
    <div className="app">
      <div className="app__backColor"></div>
         <div className="app__body">
           <Sidebar/>
           <Chat
           messageSent={messageSent}
           />
         </div>
    </div>
  );
}

export default App;
