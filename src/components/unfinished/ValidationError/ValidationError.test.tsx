import * as React from 'react';
import {shallow} from 'enzyme';
import ValidationError from './index';
describe('ValidationError', () => {
  it('ValidationError renders without crashing', () => {
    shallow(<ValidationError error="test" isValid />);
  });
});
