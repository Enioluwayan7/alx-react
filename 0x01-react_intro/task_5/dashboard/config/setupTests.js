// setupTests.js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // or -react-17 or -react-18 depending on your React version

Enzyme.configure({ adapter: new Adapter() });
