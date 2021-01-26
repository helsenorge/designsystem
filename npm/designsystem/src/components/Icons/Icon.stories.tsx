import React from 'react';
import {withKnobs, boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Icon from '.';
import TestIcon from './YouTube';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <>
      <p>{'Normal'}</p>
      <Icon
        svgIcon={TestIcon}
        isHovered={boolean('animate hover', false)}
        size={48}
        color={text('Color', 'black')}
        hoverColor={text('hoverColor', 'gray')}
      />
      <Icon svgIcon={TestIcon} isHovered={true} size={48} hoverColor={text('hoverColor', 'gray')} />
    </>
    <>
      <br />
      <p>{'ExtraSmall'}</p>
      <Icon
        svgIcon={TestIcon}
        isHovered={boolean('animate hover', false)}
        size={35}
        color={text('Color', 'black')}
        hoverColor={text('hoverColor', 'gray')}
      />
      <Icon svgIcon={TestIcon} isHovered={true} size={35} hoverColor={text('hoverColor', 'gray')} />
    </>
  </>
));
