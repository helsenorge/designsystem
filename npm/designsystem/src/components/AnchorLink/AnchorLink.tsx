import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getColor } from '../../theme/currys';
import AsChildSlot from '../AsChildSlot';
import Icon, { IconSize } from '../Icon';
import ArrowUpRight from '../Icons/ArrowUpRight';

import AnchorLinkStyles from './styles.module.scss';

export type AnchorLinkTargets = '_self' | '_blank' | '_parent';

export type AnchorLinkTags = 'a' | 'button';

export type AnchorLinkOnClickEvent =
  | React.MouseEvent<HTMLElement, MouseEvent>
  | React.FormEvent<unknown>
  | React.KeyboardEvent<HTMLUListElement>
  | null;

export interface AnchorLinkProps {
  /** When true, onclick and keyboard events will be passed to the child. */
  asChild?: boolean;
  /** Sets the content of the <a> tag */
  children: React.ReactNode;
  /** URL to link to */
  href?: string;
  /** Gives a unique id to the anchor-link :) */
  id?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the target type of the <a> tag. _blank adds an arrow icon at the end of the link */
  target?: AnchorLinkTargets;
  /** HTML markup for anchor link. Default: a */
  htmlMarkup?: AnchorLinkTags;
  /** Function that is called when clicked */
  onClick?: (e?: AnchorLinkOnClickEvent) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref that is passed to the component */
  ref?: React.Ref<HTMLAnchorElement | HTMLButtonElement | null>;
}

const AnchorLink: React.FC<AnchorLinkProps> = props => {
  const { asChild, id, href, children, className, target = '_self', htmlMarkup = 'a', onClick, testId, ref } = props;
  const external = target === '_blank';
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement | HTMLAnchorElement>(
    ref as React.RefObject<HTMLButtonElement | HTMLAnchorElement>
  );
  const anchorClasses = classNames(AnchorLinkStyles.anchorlink, className);

  const commonProps = {
    id,
    ['data-testid']: testId,
    ['data-analyticsid']: AnalyticsId.AnchorLink,
    onClick,
  };

  const renderContent = (): React.ReactElement => (
    <>
      {children}
      {external && (
        <Icon
          className={AnchorLinkStyles.anchorlink__icon}
          svgIcon={ArrowUpRight}
          color={getColor('blueberry', 600)}
          hoverColor={getColor('blueberry', 700)}
          size={IconSize.XSmall}
          isHovered={isHovered}
        />
      )}
    </>
  );

  if (asChild) {
    return (
      <AsChildSlot content={<span className={anchorClasses} />} className={AnchorLinkStyles['anchorlink-wrapper']} elementRef={refObject}>
        {children}
      </AsChildSlot>
    );
  }

  if (htmlMarkup === 'a') {
    return (
      <a
        href={href}
        target={target}
        className={anchorClasses}
        rel={external ? 'noopener noreferrer' : undefined}
        ref={refObject as React.RefObject<HTMLAnchorElement>}
        {...commonProps}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={AnchorLinkStyles['anchorlink-wrapper']}
      ref={refObject as React.RefObject<HTMLButtonElement>}
      {...commonProps}
    >
      <span className={anchorClasses}>{renderContent()}</span>
    </button>
  );
};

export default AnchorLink;
