import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct HTML when passing type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toBe('default');
    expect(wrapper.text()).toBe('test');
  });

  it('renders correct HTML when passing html prop', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" html={htmlContent} />);
    expect(wrapper.prop('data-notification-type')).toBe('default');
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
