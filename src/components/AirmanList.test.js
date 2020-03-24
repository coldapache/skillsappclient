import React from 'react';
import BaseballCard from './BaseballCard';
import { shallow } from 'enzyme';
import AirmanList from './AirmanList';
import sampleAirmen from '../sampleAirmen';

describe('AirmanList Component', () =>{
    it('it should render a Baseball card per airman in listOfAirman', () =>{
        const airmanListWrapper = shallow(<AirmanList listOfAirman={sampleAirmen}/>)

        expect(airmanListWrapper.find(BaseballCard)).toHaveLength(sampleAirmen.length)
    })
        
})