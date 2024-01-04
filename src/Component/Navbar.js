import { Link,useLocation } from 'react-router-dom'

import { useState } from 'react'
import React from 'react'
import Sidebar from './Sidebar'
import{faHome,faList,faCog} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const[ShowSidebar,setShowSidebar]=useState(false)
    const location=useLocation()
    const links=[
      {
        name:"Home",
        path:"/",
        icon:faHome
      },
      {
        name:"Recipes",
        path:"/recipies",
        icon:faList
      },
      {
        name:"Settings",
        path:"/settings",
        icon:faCog
      }
    ]
    function closeSidebar(){
      setShowSidebar(false)
    }
  return (
    <>
    <div className="navbar container">
        <Link to="/" className='logo'>F<span>oo</span>diesHub</Link>
        <div className="nav-link">
          {links.map(link =>(
            <Link className={location.pathname === link.path ? "active" :""} to={link.path} key={link.name}>{link.name}</Link>
          ))}
        </div>
        <div onClick={()=>setShowSidebar(!ShowSidebar)} className={ShowSidebar ? "sidebar-btn active":"sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
    {ShowSidebar && <Sidebar close={closeSidebar} links={links}/>}
    </>
  )
}

export default Navbar
