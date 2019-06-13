import * as React from 'react';
import {shallow, mount, ReactWrapper} from 'enzyme';
import TimeInput from './TimeInput';

describe('TimeInput', () => {
  let wrapper: ReactWrapper<{}, {}>;

  it('Renders without crashing', () => {
    shallow(<TimeInput id="1" />);
  });

  it('Renders correctly', () => {
    wrapper = mount(<TimeInput id="2" />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('Renders legend', () => {
    wrapper = mount(<TimeInput id="3" legend="Klokkeslett" />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
