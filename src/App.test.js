import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'


describe('App Component', () => {
  it('renders without crashing', () =>{
    // Creating an instance of our component to test
    const AppWrapper = shallow(<App />)
  })
  it('renders an AirmanList', () => {
    const AppWrapper = shallow(<App />)
    const AirmanList = appWrapper.find(AirmanList);

    expect(AirmanList).toHaveLength(1);
  })
  it('should have state', () => {
    const AppWrapper = shallow(<App />);

    expect(AppWrapper.state().airman).toHaveLength(1)
  })
  it('should pass airman to AirmanList', () => {
    const AppWrapper = shallow(<App />);
    const airmanList = AppWrapper.find(AirmanList)

    expect(AirmanList.props().airman).toEqual(AppWrapper.state().airman)
  })
})


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
