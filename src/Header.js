import React from 'react'
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Search } from '@mui/icons-material';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {

    const[searchTerm,setSearchTerm] = useState('')

    const searchTermHandle = (e) => {
            setSearchTerm(e.target.value)
    }
    return (
        <div className='header'>
            <div className='header-left'>
             <MenuSharpIcon/> 
             <Link to='/'>
                <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'/>
             </Link>
            </div>

             <div className='header-input'>
            <input onChange={searchTermHandle} value = {searchTerm} placeholder = 'search' type="text"/>
            <Link to={`/search/${searchTerm}`}>
                <SearchSharpIcon className='header-inputButton'/>
            </Link>
            </div>

            <div className='header-icons'>
            <VideoCallOutlinedIcon className='header-icon'/>
            <AppsSharpIcon className='header-icon'/>
            <NotificationsOutlinedIcon className='header-icon'/>
            <Avatar className='header-icon'/>
            </div>
        
        </div>

        

    )
}

export default Header
