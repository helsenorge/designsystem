import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Icon, { IconSize } from '.';
import YouTube from './YouTube';
import Search from './Search';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <>
      <p>{'Normal'}</p>
      <Icon
        svgIcon={YouTube}
        isHovered={boolean('animate hover', false)}
        size={IconSize.Small}
        color={text('Color', 'black')}
        hoverColor={text('hoverColor', 'gray')}
      />
      <Icon svgIcon={YouTube} isHovered={true} size={IconSize.Small} hoverColor={text('hoverColor', 'gray')} />
    </>
    <>
      <br />
      <p>{'ExtraSmall'}</p>
      <Icon
        svgIcon={YouTube}
        isHovered={boolean('animate hover', false)}
        size={35}
        color={text('Color', 'black')}
        hoverColor={text('hoverColor', 'gray')}
      />
      <Icon svgIcon={YouTube} isHovered={true} size={35} hoverColor={text('hoverColor', 'gray')} />
    </>
  </>
));

stories.add('Accessibility', () => (
  <>
    <>
      <p>{'aria-label'}</p>
      <Icon svgIcon={Search} ariaLabel="Search" size={IconSize.Small} />
    </>
    <>
      <br />
      <p>{'title'}</p>
      <Icon svgIcon={Search} id="search" ariaLabel="Search" size={IconSize.Small} />
    </>
  </>
));
