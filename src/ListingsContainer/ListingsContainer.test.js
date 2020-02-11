import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ListingsContainer from './ListingsContainer';
import { shallow } from 'enzyme';

describe('ListingsContainer', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<ListingsContainer />)
    instance = wrapper.instance()

  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListingsContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});