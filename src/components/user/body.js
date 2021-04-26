import React from "react";
import { Link } from "react-router-dom";


const HomeBody = ({match}) =>{
    console.log(match)
    return(
        <div>
            <Link to="/users/1">링크 1</Link>
            {match.params.id}
        </div>
    )
}

export default HomeBody;