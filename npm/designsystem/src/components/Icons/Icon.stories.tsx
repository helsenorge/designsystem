import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Icon, { IconSize } from '.';
import ExampleSvgIcon from './Undo';
import Search from './Search';
import Spacer from '../Spacer';
import { useHover } from '../../hooks/useHover';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const { hoverRef: xLargeRef, isHovered: xLargeIsHovered } = useHover<SVGSVGElement>();
  const { hoverRef: largeRef, isHovered: largeIsHovered } = useHover<SVGSVGElement>();
  const { hoverRef: mediumRef, isHovered: mediumIsHovered } = useHover<SVGSVGElement>();
  const { hoverRef: smallRef, isHovered: smallIsHovered } = useHover<SVGSVGElement>();
  const { hoverRef: xSmallRef, isHovered: xSmallIsHovered } = useHover<SVGSVGElement>();
  const { hoverRef: xxSmallRef, isHovered: xxSmallIsHovered } = useHover<SVGSVGElement>();
  return (
    <div style={{ display: 'flex', width: '1400px', justifyContent: 'space-between' }}>
      <div>
        <p>{'XLarge'}</p>
        <Icon
          svgIcon={ExampleSvgIcon}
          ref={xLargeRef}
          isHovered={boolean('hovered', false) || xLargeIsHovered}
          size={IconSize.XLarge}
          color={text('Color', 'black')}
          hoverColor={text('hoverColor', 'gray')}
        />
      </div>
      <div>
        <p>{'Large'}</p>
        <Icon
          svgIcon={ExampleSvgIcon}
          ref={largeRef}
          isHovered={boolean('hovered', false) || largeIsHovered}
          size={IconSize.Large}
          color={text('Color', 'black')}
          hoverColor={text('hoverColor', 'gray')}
        />
      </div>
      <div>
        <p>{'Medium'}</p>
        <Icon
          svgIcon={ExampleSvgIcon}
          ref={mediumRef}
          isHovered={boolean('hovered', false) || mediumIsHovered}
          size={IconSize.Medium}
          color={text('Color', 'black')}
          hoverColor={text('hoverColor', 'gray')}
        />
      </div>
      <div>
        <p>{'Small'}</p>
        <Icon
          svgIcon={ExampleSvgIcon}
          ref={smallRef}
          isHovered={boolean('hovered', false) || smallIsHovered}
          size={IconSize.Small}
          color={text('Color', 'black')}
          hoverColor={text('hoverColor', 'gray')}
        />
      </div>
      <div>
        <p>{'XSmall'}</p>
        <Icon
          svgIcon={ExampleSvgIcon}
          ref={xSmallRef}
          isHovered={boolean('hovered', false) || xSmallIsHovered}
          size={IconSize.XSmall}
          color={text('Color', 'black')}
          hoverColor={text('hoverColor', 'gray')}
        />
      </div>
      <div>
        <p>{'XXSmall'}</p>
        <Icon
          svgIcon={ExampleSvgIcon}
          ref={xxSmallRef}
          isHovered={boolean('hovered', false) || xxSmallIsHovered}
          size={IconSize.XXSmall}
          color={text('Color', 'black')}
          hoverColor={text('hoverColor', 'gray')}
        />
      </div>
    </div>
  );
});

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
