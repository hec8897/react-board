import React from 'react'


const UserInfo = ({ User }) => {
    return (
        <div>
            <h2>유저 정보</h2>
            {User === null ? "" : User.map((ele) => {
                return <div key={ele.id}>
                    <p>{ele.name}</p>
                    <p>{ele.address}</p>
                </div>
            })}
        </div>
    )

}

export default UserInfo