import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';
describe('Button', () => {
  const wrap = mount(<Button text="Button" />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('button').text()).toBe('Button');
  });
});
