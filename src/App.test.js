import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import AirmanList from './components/AirmanList'
import { shallow } from 'enzyme'


describe('App Component', () => {
  it('renders without crashing', () =>{
    // Creating an instance of our component to test
    const appWrapper = shallow(<App />)
  })
  it('renders an AirmanList', () => {
    const appWrapper = shallow(<App />)
    const airmanList = appWrapper.find(AirmanList);

    expect(airmanList).toHaveLength(1);
  })
  it('should have a listOfAirman state', () => {
    const appWrapper = shallow(<App />);

    expect(appWrapper.state().listOfAirman).toBeDefined();
  })
  it('should pass this state listOfAirman to AirmanList', () => {
    const appWrapper = shallow(<App />);
    const airmanList = appWrapper.find(AirmanList)

    expect(airmanList.props().listOfAirman).toEqual(appWrapper.state().listOfAirman)
  })
})


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
