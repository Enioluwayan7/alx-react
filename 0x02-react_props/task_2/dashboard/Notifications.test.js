import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem components instead of li elements', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the first NotificationItem element with correct HTML', () => {
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    expect(firstNotificationItem.prop('type')).toBe('default');
    expect(firstNotificationItem.prop('value')).toBe('New course available');
  });
});
