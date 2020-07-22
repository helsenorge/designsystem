import React from 'react';
import {withKnobs, select, boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import {allPaletteNames} from '../../../.storybook/knobs';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Icon
    svgIcon={AlarmClock}
    isHovered={boolean('Is hovered', false)}
    size={number('Size', 48)}
    color={select('Color', allPaletteNames, 'black')}
  />
));
/*
stories.add('All icons', () => (
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)'}}>
    {allIcons.map(icon => {
      return (
        <Icon
          isHovered={boolean('Is hovered', false)}
          size={number('Size', 48)}
          color={select('Color', allPaletteNames, 'black')}
          type={icon}
        />
      );
    })}
  </div>
));
*/
