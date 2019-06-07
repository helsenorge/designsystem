import * as React from 'react';
import {shallow} from 'enzyme';
import {ConfirmBox} from '.';

describe('Confirmbox', () => {
  it('Confirmbox renders without crashing', () => {
    shallow(<ConfirmBox onConfirm={() => null} />);
  });
});
