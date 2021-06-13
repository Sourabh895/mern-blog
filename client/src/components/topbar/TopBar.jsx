import React from 'react';
import './topbar.css';
import {Link} from 'react-router-dom';

function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-p"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                        </li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                       <img className="topImg" src="https://images.pexels.com/photos/6636659/pexels-photo-6636659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                            </li>
                       
                        
                        </ul>
                    )
                }
           
           <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar;
