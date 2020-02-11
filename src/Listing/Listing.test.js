import React, { Component } from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Listing from './Listing';
import { shallow } from 'enzyme';

describe('Listing', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Listing 
    componentDidMount={jest.fn()} />)
    instance = wrapper.instance()

  })
console.log(wrapper)
console.log(instance)

  it('should check the data default state', () => {
    expect(wrapper.instance.state.listing).toEqual({});
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Listing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});