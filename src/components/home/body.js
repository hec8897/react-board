import React from "react";
import HomeNav from "./homeNav";
import './home.scss'
const HomeBody = () => {

    return (
        <div className='home-component'>
            <div className="lnb">
                <ul>
                    <li>Home</li>
                    <li>menu1</li>
                    <li>menu2</li>
                </ul>
            </div>
            <div className="contents">
                <div className='local-nav' style={{ flex: 1 }}>
                    <HomeNav />
                </div>
                <div className='local-body' style={{ flex: 6 }}>2</div>
            </div>
        </div>
    )
}

export default HomeBody;