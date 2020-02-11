import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Form />)
    instance = wrapper.instance()

  })

  // it('should check the data default state', () => {
  //   console.log(wrapper)
  //   expect(wrapper.state().purpose).toEqual('Business');
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});