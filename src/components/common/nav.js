import React from "react";
import './nav.scss'
import { Link } from "react-router-dom";

const AppNav = () => {
    return (
        <nav>
            <h1><Link to="/">USER ADMIN</Link></h1>

            <ul>
                <li>
                    <Link to="/users/main">USER</Link>
                </li>
                <li>
                    <Link to="/board">BOARD</Link>
                </li>
                <li>
                    {/* <Link to="/board">BOARD</Link> */}
                    SETTING
                </li>
            </ul>
        </nav>
    )
}

export default AppNav;
