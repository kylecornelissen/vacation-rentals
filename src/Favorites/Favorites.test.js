import React, {Component} from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Favorites />)
    instance = wrapper.instance()

  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Favorites />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});