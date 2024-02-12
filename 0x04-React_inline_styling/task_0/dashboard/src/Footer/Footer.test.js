import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

describe('Test Footer.js', () => {
  it('Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).to.be.true;
  });

  it('Footer contains div with class App-footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer.App-footer').exists()).to.be.true;
  });

  it('Footer renders Copyright text', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).to.contain('Copyright');
  });
});
