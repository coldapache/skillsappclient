import React from 'react';
import BaseballCard from './BaseballCard';
import { shallow } from 'enzyme';
import sampleAirmen from '../sampleAirmen';

const myAirman = sampleAirmen[3];

describe('BaseballCard Component', () =>{
    it('it should render an avatar image from the airman imgURL', () =>{
        const baseballCardWrapper = shallow(<BaseballCard airman={myAirman}/>)

    expect(baseballCardWrapper.find("img").prop("src")).toEqual(myAirman.imgURL)
    })
    
    it('it should display an airman rank and fullname', () => {
        const baseballCardWrapper = shallow(<BaseballCard airman={myAirman}/>)
        let fullName = `${myAirman.rank} ${myAirman.firstName} ${myAirman.middleInitial} ${myAirman.lastName}`
    expect(baseballCardWrapper.find('h3').text()).toEqual(fullName)
    })
        
    it('it should render up to 3 buttons representing airman skills', () => {
        const baseballCardWrapper = shallow(<BaseballCard airman={myAirman}/>)

    expect(baseballCardWrapper.find('button').length).toBeLessThanOrEqual(3)
    })

})