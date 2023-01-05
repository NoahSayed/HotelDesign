import React from "react";
import "./Header.css"
import { faBed,  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi, } from "@fortawesome/free-solid-svg-icons";




function Header() {
  return (
<nav>
     
  <navmenu>
           
           
  <h1 className="sample" > <i>Sample logo</i></h1>     
         
            
          
      
        </navmenu>
        <dropDown>
              <span >Need help call - 9110909000</span>
            </dropDown>
        <img className="hotelimg" src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"></img>
     
     
     
     
        </nav>
     
      )}
  
 

export default Header;