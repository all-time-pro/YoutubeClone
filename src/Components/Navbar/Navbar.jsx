import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'
import logo12 from '../../assets/1.png'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
        <Link to='/'><img className='logo' src={logo2} alt="Dev Busters" /></Link>
      </div>
      <div className="nav-right flex-div">
      <a href="https://intel-blog.netlify.app/"><img src={upload_icon} alt="" /></a>
        <a href="https://intel-gemini.netlify.app/"><img src={more_icon} alt="" /></a>
        <a href="https://intelengine.netlify.app/"><img src={notification_icon} alt="" /></a>
        <a href="Profile.html"><img src={logo12} className='user-icon' alt="" /></a>
      </div>
    </nav>
  )
}

export default Navbar