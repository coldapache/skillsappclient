import React from 'react';
import BaseballCard from './BaseballCard';

const AirmanList = ({listOfAirman}) => {
    return (
        <section>
            {listOfAirman.map((airman,index) =>(
                <BaseballCard key={index} airman={airman}/>
            ))}
        </section>
    )
}


export default AirmanList;