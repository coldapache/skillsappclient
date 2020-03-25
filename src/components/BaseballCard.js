import React from 'react';

const BaseballCard = ({airman}) =>{
    let fullName = `${airman.rank} ${airman.firstName} ${airman.middleInitial} ${airman.lastName}`
    return (
        <div>
            <img src={airman.imgURL}/>
            <h3>{fullName}</h3>
            {airman.skills.map((skill,index) =>(
                <button key={index}>{skill}</button>
            ))}
        </div>
    )
}

export default BaseballCard;