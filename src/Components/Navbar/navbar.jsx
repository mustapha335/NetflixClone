import React,{ useState} from 'react';
import "./Navbar.scss";
import Logo from "./Netflix-Logo.png";
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import avatar from "./avatar-img.jpeg";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    
   
    return (
        <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
           <div className="container">
               <div className="left">
                   <img src={Logo} alt="" />
                   <span>Homepage</span>
                   <span>Series</span>
                   <span>Movies</span>
                   <span>New and Popular</span>
                   <span>My List</span>
               </div>
               <div className="right">
                   <Search  className="icon"/>
                   <span>KIDS</span>
                   <Notifications  className="icon"/>
                   <img src={avatar} alt="" />
                   <div className="profile">
                      <ArrowDropDown   className="icon"/>
                      <div className="options">
                          <span>Settings</span>
                          <span>Logout</span>
                      </div>
                   </div>

                   
               </div>

           </div>
        </div>
    )
}

export default Navbar

