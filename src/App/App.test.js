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

  it('should add a new user to state', () => {
    expect(wrapper.state().name).toEqual('Name');
    expect(wrapper.state().purpose).toEqual('Purpose');
    wrapper.instance().addUser({name: 'Mike', purpose: 'Vaca'})
    expect(wrapper.state().name).toEqual('Mike');
    expect(wrapper.state().purpose).toEqual('Vaca');
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});


