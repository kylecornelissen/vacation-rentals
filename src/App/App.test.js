import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()

  })

  it('should check the data default state', () => {
    expect(wrapper.state().name).toEqual('Name');
    expect(wrapper.state().purpose).toEqual('Purpose');
    expect(wrapper.state().favorites).toEqual([]);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});


