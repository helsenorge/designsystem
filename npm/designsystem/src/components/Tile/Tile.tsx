import React, { useState } from 'react';
import classNames from 'classnames';

import { HTMLAnchorProps } from '../../constants';
import { TitleTags } from './../Title/Title';
import { IconSize } from '../Icons';

import tileStyles from './styles.module.scss';

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

const Title = React.forwardRef(function TitleForwardedRef(props: TileTitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
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

export const Tile = React.forwardRef(function TileForwardedRef(props: TileProps, ref: React.ForwardedRef<HTMLAnchorElement>) {
  const { icon, title, className = '', description, fixed = false, highlighted = false, ...restProps } = props;
  const [isHovered, setIsHovered] = useState(false);
  const compact = !description;
  const tileClasses = classNames(
    tileStyles.tile,
    {
      [tileStyles['tile--fixed']]: fixed,
      [tileStyles['tile--compact']]: compact,
      [tileStyles['tile--highlighted']]: highlighted,
    },
    className
  );
  const tileTitleWrapperClasses = classNames(tileStyles['title-wrapper'], {
    [tileStyles['title-wrapper--compact']]: compact,
  });

  return (
    <a
      ref={ref}
      className={tileClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      {...restProps}
    >
      <div className={tileTitleWrapperClasses}>
        {React.cloneElement(icon, { size: IconSize.Medium, isHovered, color: highlighted ? 'white' : 'black' })}
        {React.cloneElement(title, { highlighted: highlighted, compact: compact })}
      </div>
      {description ? <p className={tileStyles.tile__description}>{description}</p> : null}
    </a>
  );
}) as TileCompound;

Tile.Title = Title;

export default Tile;
