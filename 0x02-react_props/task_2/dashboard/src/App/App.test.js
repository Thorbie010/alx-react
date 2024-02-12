import { shallow } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('App contains header with class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header.App-header').exists()).toBe(true);
  });

  it('App contains body with class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body').exists()).toBe(true);
  });

  it('App contains footer with class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('footer.App-footer').exists()).toBe(true);
  });
});
