import * as React from 'react';
import {shallow} from 'enzyme';
import {Block} from '.';

describe('Block', () => {
  it('Block renders without crashing', () => {
    shallow(<Block />);
  });
});
