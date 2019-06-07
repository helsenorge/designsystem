import * as React from 'react';
import {shallow} from 'enzyme';
import {Whortleberry} from '.';

describe('Whortleberry', () => {
  it('Whortleberry renders without crashing', () => {
    shallow(<Whortleberry />);
  });
});
