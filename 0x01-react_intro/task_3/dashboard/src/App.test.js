import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  // Test that App renders without crashing
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // Verify that App renders a div with the class App-header
  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  // Verify that App renders a div with the class App-body
  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  // Verify that App renders a div with the class App-footer
  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});
