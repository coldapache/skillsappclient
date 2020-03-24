import React from 'react';
import BaseballCard from './BaseballCard';

const AirmanList = ({listOfAirman}) => {
    return (
        <section>
            {listOfAirman.map(airman =>(
                <BaseballCard airman={airman}/>
            ))}
        </section>
    )
}


export default AirmanList;