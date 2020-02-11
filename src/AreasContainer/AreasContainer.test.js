import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import AreasContainer from './AreasContainer';
import { shallow } from 'enzyme';

describe('AreasContainer', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<AreasContainer />)
    instance = wrapper.instance()

  })

  // it('should check the data default state', () => {
  //   expect(wrapper.state().purpose).toEqual('Business');
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AreasContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});