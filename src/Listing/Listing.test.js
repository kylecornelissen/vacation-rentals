import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Listing from './Listing';
import { shallow } from 'enzyme';

describe('Listing', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Listing />)
    instance = wrapper.instance()

  })

  it('should check the data default state', () => {
    expect(wrapper.state().features).toEqual([]);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});