import React from 'react';

import classNames from 'classnames';

import { TitleTags } from './../Title/Title';
import { AnalyticsId } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { mergeRefs } from '../../utils/refs';
import { IconSize } from '../Icons';

import tileStyles from './styles.module.scss';

interface TileProps extends Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick' | 'rel'> {
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

Title.displayName = 'Title';

export const Tile = React.forwardRef<HTMLAnchorElement, TileProps>((props, ref) => {
  const { icon, title, className = '', description, fixed = false, highlighted = false, testId, target, rel, href, onClick } = props;
  const { hoverRef, isHovered } = useHover<HTMLAnchorElement>();
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
      ref={mergeRefs([ref, hoverRef])}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      className={tileClasses}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Tile}
      onClick={onClick}
    >
      <div className={tileTitleWrapperClasses}>
        {React.cloneElement(icon, { size: IconSize.Medium, isHovered, color: highlighted ? 'white' : 'black' })}
        {React.cloneElement(title, { highlighted: highlighted, compact: compact })}
      </div>
      {description && <p className={tileStyles.tile__description}>{description}</p>}
    </a>
  );
}) as TileCompound;

Tile.displayName = 'Tile';
Tile.Title = Title;

export default Tile;
