import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, IconSize } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';
import { getColor } from '../../theme/currys/color';
import { PaletteNames } from '../../theme/palette';
import { AnchorLinkTags, AnchorLinkTargets } from '../AnchorLink';
import Icon from '../Icon';
import ArrowRight from '../Icons/ArrowRight';
import ArrowUpRight from '../Icons/ArrowUpRight';
import { IllustrationProps } from '../Illustration/Illustration';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

export type PromoPanelColors = Extract<PaletteNames, 'neutral' | 'blueberry' | 'cherry'>;

interface PromoPanelProps {
  /** Used as the link text if set. title or children must be set for the link to have accessible text. */
  title?: string;
  /** Used as the link text if title is not set. */
  children?: string;
  /** Illustration element */
  illustration?: React.FC<IllustrationProps>;
  /** Changes the underlying element of the title. */
  titleHtmlMarkup?: TitleTags;
  /** Changes the background color. Default: white */
  color?: PromoPanelColors;
  /** Not used if linkComponent is set */
  href?: string;
  /** Anchor link target. If linkComponent is set, this prop is only used to display the right icon for external links. */
  target?: AnchorLinkTargets;
  /** HTML markup for anchor link. Not used if linkComponent is set. Default: a */
  linkHtmlMarkup?: AnchorLinkTags;
  /** Function that is called when clicked. Not used if linkComponent is set. */
  linkOnClick?: () => void;
  /** Custom link component. Must be "a" a or "button" element with no styling. */
  linkComponent?: React.ReactElement;
  /** Sets the data-testid attribute. */
  testId?: string;
}

interface PromoPanelLinkProps {
  children?: string;
  href?: string;
  target?: AnchorLinkTargets;
  linkComponent?: React.ReactElement;
  linkHtmlMarkup?: AnchorLinkTags;
  linkOnClick?: () => void;
}

const PromoPanelLink: React.FC<PromoPanelLinkProps> = props => {
  if (props.linkComponent) {
    return React.cloneElement(props.linkComponent, { children: props.children });
  }

  if (props.linkHtmlMarkup === 'button') {
    return (
      <button type={'button'} onClick={props.linkOnClick}>
        {props.children}
      </button>
    );
  }
  return (
    <a href={props.href} target={props.target} onClick={props.linkOnClick}>
      {props.children}
    </a>
  );
};

const PromoPanel: React.FC<PromoPanelProps> = props => {
  const { isHovered, hoverRef } = useHover<HTMLDivElement>();

  const { color = 'neutral', titleHtmlMarkup = 'h2', linkHtmlMarkup = 'a' } = props;

  const breakpoint = useBreakpoint();

  const promoPanelClasses = classNames(
    styles.promopanel,
    styles[`promopanel--${color}`],
    !props.illustration && styles['promopanel--no-illustration']
  );

  const promoPanelLink = (
    <PromoPanelLink
      href={props.href}
      target={props.target}
      linkComponent={props.linkComponent}
      linkHtmlMarkup={linkHtmlMarkup}
      linkOnClick={props.linkOnClick}
    >
      {props.title || props.children}
    </PromoPanelLink>
  );

  return (
    <div className={promoPanelClasses} data-testid={props.testId} data-analyticsid={AnalyticsId.PromoPanel} ref={hoverRef}>
      {React.isValidElement<IllustrationProps>(props.illustration) &&
        React.cloneElement(props.illustration, { className: styles.promopanel__illustration })}
      <div className={styles.promopanel__content}>
        {props.title && (
          <Title htmlMarkup={titleHtmlMarkup} appearance={'title3'}>
            {promoPanelLink}
          </Title>
        )}
        {!props.title ? promoPanelLink : props.children}
      </div>
      <div className={styles.promopanel__icon}>
        <Icon
          svgIcon={props.target === '_blank' ? ArrowUpRight : ArrowRight}
          size={breakpoint >= Breakpoint.md ? IconSize.Small : IconSize.XSmall}
          isHovered={isHovered}
          color={getColor('blueberry', 500)}
          hoverColor={getColor('blueberry', 600)}
        />
      </div>
    </div>
  );
};

export default PromoPanel;
