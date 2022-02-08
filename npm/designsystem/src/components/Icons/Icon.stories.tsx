import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Icon, { IconSize } from '.';
import X from './X';
import Search from './Search';
import Spacer from '../Spacer';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <>
      <p>{'Normal'}</p>
      <Icon
        svgIcon={X}
        isHovered={boolean('animate hover', false)}
        size={IconSize.Small}
        color={text('Color', 'black')}
        hoverColor={text('hoverColor', 'gray')}
      />
      <Icon svgIcon={X} isHovered={true} size={IconSize.Small} hoverColor={text('hoverColor', 'gray')} />
    </>
    <Spacer size="4xs" />
    <>
      <p>{'ExtraSmall'}</p>
      <Icon
        svgIcon={X}
        isHovered={boolean('animate hover', false)}
        size={IconSize.XSmall}
        color={text('Color', 'black')}
        hoverColor={text('hoverColor', 'gray')}
      />
      <Icon svgIcon={X} isHovered={true} size={IconSize.XSmall} hoverColor={text('hoverColor', 'gray')} />
    </>
    <Spacer size="4xs" />
    <>
      <p>{'Tiny'}</p>
      <Icon
        svgIcon={X}
        isHovered={boolean('animate hover', false)}
        size={IconSize.Tiny}
        color={text('Color', 'black')}
        hoverColor={text('hoverColor', 'gray')}
      />
      <Icon svgIcon={X} isHovered={true} size={IconSize.Tiny} hoverColor={text('hoverColor', 'gray')} />
    </>
  </>
));

stories.add('Accessibility', () => (
  <>
    <>
      <p>{'aria-label'}</p>
      <Icon svgIcon={Search} ariaLabel="Search" size={IconSize.Small} />
    </>
    <Spacer size="4xs" />
    <>
      <p>{'title'}</p>
      <Icon svgIcon={Search} id="search" ariaLabel="Search" size={IconSize.Small} />
    </>
  </>
));
