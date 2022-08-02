import React from 'react';
import classNames from 'classnames';

import { AnalyticsId, HTMLAnchorProps } from '../../constants';
import { TitleTags } from './../Title/Title';
import { IconSize } from '../Icons';

import tileStyles from './styles.module.scss';
import { useHover } from '../../hooks/useHover';

export type TileTags = 'button' | 'a';

interface TileProps extends HTMLAnchorProps {
  /** Adds custom classes to the element. */
  className?: string;
  /**	Sets the icon to be displayed inside the tile. */
  icon: React.ReactElement;
  /**	Sets the title to be displayed inside the tile. */
  title: React.ReactElement;
  /** Toggles the highlighted style of the tile. */
  highlighted?: boolean;
  /** Sets the description to be displayed inside the tile. */
  description?: string;
  /** Sets a fixed max and min width for the tile. */
  fixed?: boolean;
  /** Called when the tile is clicked on. */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** HTML markup for tile. Default: a */
  htmlMarkup?: TileTags;
  /** Sets the data-testid attribute. */
  testId?: string;
}

interface TileTitleProps {
  children: React.ReactNode;
  className?: string;
  htmlMarkup?: TitleTags;
  highlighted?: boolean;
  compact?: boolean;
}

export interface TileCompound extends React.ForwardRefExoticComponent<TileProps & React.RefAttributes<HTMLAnchorElement>> {
  Title: React.ForwardRefExoticComponent<TileTitleProps & React.RefAttributes<HTMLHeadingElement>>;
}

const Title = React.forwardRef<HTMLHeadingElement, TileTitleProps>((props, ref) => {
  const { children, className, htmlMarkup = 'span', highlighted, compact } = props;
  const titleClasses = classNames(
    tileStyles['tile__title'],
    {
      [tileStyles['tile__title--highlighted']]: highlighted,
      [tileStyles['tile__title--compact']]: compact,
    },
    className
  );
  const CustomTag = htmlMarkup;

  return (
    <CustomTag className={titleClasses} ref={ref}>
      {children}
    </CustomTag>
  );
});

export const Tile = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, TileProps>((props, ref) => {
  const { icon, title, className = '', description, fixed = false, highlighted = false, testId, htmlMarkup = 'a', ...restProps } = props;
  const { hoverRef, isHovered } = useHover<HTMLButtonElement | HTMLAnchorElement>(
    ref as React.RefObject<HTMLButtonElement | HTMLAnchorElement>
  );
  const compact = !description;
  const tileClasses = classNames(
    tileStyles.tile,
    {
      [tileStyles['tile--fixed']]: fixed,
      [tileStyles['tile--compact']]: compact,
      [tileStyles['tile--highlighted']]: highlighted,
      [tileStyles['tile--button']]: htmlMarkup === 'button',
    },
    className
  );
  const tileTitleWrapperClasses = classNames(tileStyles['title-wrapper'], {
    [tileStyles['title-wrapper--compact']]: compact,
  });

  const renderContent = () => (
    <>
      <div className={tileTitleWrapperClasses}>
        {React.cloneElement(icon, { size: IconSize.Medium, isHovered, color: highlighted ? 'white' : 'black' })}
        {React.cloneElement(title, { highlighted: highlighted, compact: compact })}
      </div>
      {description ? <p className={tileStyles.tile__description}>{description}</p> : null}
    </>
  );

  const commonProps = {
    className: tileClasses,
    ['data-testid']: testId,
    ['data-analyticsid']: AnalyticsId.Tile,
    ...restProps,
  };

  return (
    <>
      {htmlMarkup === 'a' && (
        <a
          ref={hoverRef as React.RefObject<HTMLAnchorElement>}
          rel={props.target === '_blank' ? 'noopener noreferrer' : props.rel}
          {...commonProps}
        >
          {renderContent()}
        </a>
      )}
      {htmlMarkup === 'button' && (
        <button ref={hoverRef as React.RefObject<HTMLButtonElement>} type="button" {...commonProps}>
          {renderContent()}
        </button>
      )}
    </>
  );
}) as TileCompound;

Tile.Title = Title;

export default Tile;
