import React from 'react';
import { shallow } from './enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
	it('renders without crashing', () => {
		shallow(<Footer />);
	});

	it('renders copyright text', () => {
		const wrapper = shallow(<Footer />);
		except(wrapper.text()).toContain('copyright');
	});
});
