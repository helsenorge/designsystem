import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { TitleTags } from './../Title/Title';
import { useBreakpoint, Breakpoint } from '../../hooks/useBreakpoint';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { mergeRefs } from '../../utils/refs';
import { IconSize } from '../Icon';

import tileStyles from './styles.module.scss';

export type TileVariants = 'normal' | 'compact';

interface TileProps extends Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick' | 'rel'> {
  children?: React.ReactNode;
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
  /** Sets the visual variant of the component */
  variant?: TileVariants;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref passed to the component */
  ref?: React.Ref<HTMLAnchorElement | null>;
}

interface TileTitleProps {
  children: React.ReactNode;
  className?: string;
  htmlMarkup?: TitleTags;
  highlighted?: boolean;
  compact?: boolean;
  /** Ref passed to the title element */
  ref?: React.Ref<HTMLHeadingElement | null>;
}

export interface TileCompound extends React.FC<TileProps> {
  Title: React.FC<TileTitleProps>;
}

const Title: React.FC<TileTitleProps> = props => {
  const { compact, children, className, htmlMarkup = 'span', highlighted, ref } = props;
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
};

Title.displayName = 'Title';

export const Tile: TileCompound = props => {
  const {
    children,
    icon,
    title,
    className = '',
    description,
    fixed = false,
    highlighted = false,
    testId,
    target,
    rel,
    variant = 'normal',
    href,
    onClick,
    ref,
  } = props;
  const { refObject, isHovered } = usePseudoClasses<HTMLAnchorElement>();
  const breakpoint = useBreakpoint();
  const mobile = breakpoint < Breakpoint.md;
  const compact = variant === 'compact';
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
      ref={mergeRefs([ref, refObject])}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      className={tileClasses}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Tile}
      onClick={onClick}
    >
      <div className={tileTitleWrapperClasses}>
        {React.cloneElement(icon, { size: mobile ? IconSize.Small : IconSize.Medium, isHovered, color: highlighted ? 'white' : 'black' })}
        {React.cloneElement(title, { highlighted: highlighted, compact: compact })}
      </div>
      {!compact && !mobile && <p className={tileStyles.tile__description}>{description}</p>}
      {children && <div className={tileStyles.tile__children}>{children}</div>}
    </a>
  );
};

Tile.displayName = 'Tile';
Tile.Title = Title;

export default Tile;
