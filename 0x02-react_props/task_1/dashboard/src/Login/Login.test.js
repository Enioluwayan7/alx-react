import React from 'react';
import { shallow } from './enzyme';
import Login fro './Login';

describe('Login Component', () => {
	it('renders without crashing', () => {
		shallow(<Login />);
	});

	it('contains two input tags and two label tags', () => {
		const wrapper = shallow(<Login />);
		except(wrapper.find('input')).toHaveLength(2);
		expect(wrapper.find('label')).toHaveLenth(2);
	});
});
