import React from "react";
import './nav.scss'
import { NavLink } from "react-router-dom";
import { HouseFill, PersonBadge, CardText, GearFill } from 'react-bootstrap-icons';

const AppNav = () => {
    return (
        <nav>
            <div>

                <h1>
                    <NavLink to="/" activeStyle={{ background: '#,,80a7b8' }} exact>
                        <HouseFill color="#fff" size={20} />
                    </NavLink>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/users/main" activeStyle={{ background: '#80a7b8' }} >
                            <PersonBadge color="#fff" size={20} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/board" activeStyle={{ background: '#80a7b8' }}  >
                            <CardText color="#fff" size={20} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" >
                            <GearFill color="#fff" size={20} />
                        </NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default AppNav;
