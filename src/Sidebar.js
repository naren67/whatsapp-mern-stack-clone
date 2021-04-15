import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChats from './SidebarChats.js'
import { Avatar } from '@material-ui/core';


function Sidebar() {
          return (
                    <div className='sidebar'>
                              <div className="sidebar__header">
                                        <div className="sidebar__headerLeft">
                                                  <Avatar className='profileIcon' style={{ fontSize: 38 }}/>
                                        </div>
                                        <div className="sidebar__headerRight">
                                                  <div className="sidebar__headerIcon">
                                                            <DonutLargeIcon style={{ fontSize: 20 }}/>
                                                  </div>
                                                  <div className="sidebar__headerIcon">
                                                            <MessageIcon style={{ fontSize: 20 }}/>
                                                  </div>
                                                  <div className="sidebar__headerIcon">
                                                            <MoreVertIcon style={{ fontSize: 20 }}/>
                                                  </div>
                                        </div>
                              </div>
                              <div className="sidebar__searchBar">
                                        <div className="sidebar__input">
                                        <SearchIcon className='search__icon' style={{ fontSize: 20 }}/>
                                        <input placeholder='Search or start new chat' type="text"/>
                                        </div>
                              </div>
                              <div className="sidebar__chats">
                                        <SidebarChats/>
                                        <SidebarChats/>
                                        <SidebarChats/>
                                        <SidebarChats/>
                              
                              </div>
                    </div>
          )
}

export default Sidebar
