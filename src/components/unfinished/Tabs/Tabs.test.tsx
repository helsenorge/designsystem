import * as React from 'react';
import {shallow} from 'enzyme';
import Tabs from './index';
import Tab from './tab';

describe('Tabs', () => {
  it('Tabs renders without crashing', () => {
    shallow(<Tabs />);
  });

  it('Tab renders without crashing', () => {
    shallow(<Tab title="lala" />);
  });
});
