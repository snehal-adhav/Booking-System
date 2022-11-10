import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
const Nav=()=>{
 
    return(
        <div>
            <ul className="nav-ul">
              <li><Link to="/">Book Appointments</Link></li>
              <li><Link to="/slot">Slots</Link></li>
            </ul>
        </div>
    )
}
export default Nav;