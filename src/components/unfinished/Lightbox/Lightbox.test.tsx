import * as React from 'react';
import {shallow} from 'enzyme';

import {LightBox} from '.';

describe('Lightbox', () => {
  it('Lightbox renders without crashing', () => {
    shallow(<LightBox />);
  });
});
