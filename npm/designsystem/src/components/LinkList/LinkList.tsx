import React from 'react';

import cn from 'classnames';

import { AnalyticsId, LanguageLocales } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { HNDesignsystemLinkList } from '../../resources/Resources';
import { PaletteNames } from '../../theme/palette';
import { useLanguage } from '../../utils/language';
import { ElementHeaderType, renderElementHeader } from '../ElementHeader/ElementHeader';
import ChevronRight from '../Icons/ChevronRight';
import ListEditModeItem, { ListEditModeItemProps, listEditModeWrapperClassnames } from '../ListEditMode';
import { getResources } from './resourceHelper';

import LinkListStyles from './styles.module.scss';

export type LinkListSize = 'small' | 'medium' | 'large';

export type LinkListStatus = 'none' | 'new';

export type LinkAnchorTargets = '_self' | '_blank' | '_parent';

export type LinkListColors = Extract<PaletteNames, 'white' | 'blueberry' | 'cherry' | 'neutral'>;
export type LinkListVariant = 'line' | 'outline' | 'fill' | 'fill-negative';

export interface LinkType extends React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLIElement>> {
  ElementHeader?: ElementHeaderType;
}

export type LinkTags = 'button' | 'a';
export interface CompoundComponent extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
  Link: LinkType;
}

export interface LinkListProps {
  /** Items in the LinkList */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /**  Changes the colors of the list. */
  color?: LinkListColors;
  /** Toggles chevron icon on or off. */
  chevron?: boolean;
  /** Changes size of the LinkList. */
  size?: LinkListSize;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets visual priority */
  variant?: LinkListVariant;
  /** Highlights text. Used for search results */
  highlightText?: string;
  /**
   * @experimental This prop is experimental and may change in the future.
   * Enables ListEditMode
   */
  editMode?: boolean;
  /** Resources for component */
  resources?: Partial<HNDesignsystemLinkList>;
}

type Modify<T, R> = Omit<T, keyof R> & R;

export type LinkProps = Modify<
  React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
  {
    children: React.ReactNode;
    chevron?: boolean;
    className?: string;
    icon?: React.ReactElement;
    /** Renders the image in the LinkList header */
    image?: React.ReactElement;
    /** Displays a status on the left side: default none */
    status?: LinkListStatus;
    href?: string;
    target?: LinkAnchorTargets;
    /** HTML markup for link. Default: a */
    htmlMarkup?: LinkTags;
    /**
     * Ref for lenke/knapp
     */
    linkRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement> | null;
    /** Sets the data-testid attribute. */
    testId?: string;
    /** Highlights text. Override if different from list */
    highlightText?: string;
    /** Resources for component */
    resources?: Partial<HNDesignsystemLinkList>;
    /** @experimental id for content (only used in edit mode for aria-describedby) */
    contentId?: string;
  }
> &
  Pick<LinkListProps, 'color' | 'size' | 'variant'> &
  ListEditModeItemProps;

export const Link: LinkType = React.forwardRef((props: LinkProps, ref: React.Ref<HTMLLIElement>) => {
  const {
    children,
    className = '',
    color = 'white',
    icon,
    image,
    size = 'medium',
    chevron = false,
    linkRef,
    status = 'none',
    testId,
    target,
    variant,
    htmlMarkup = 'a',
    highlightText,
    editMode = false,
    contentId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resources, // used by ListEditModeItem in LinkList
    ...restProps
  } = props;
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement | HTMLAnchorElement>(linkRef);

  const isFill = variant === 'fill';
  const isFillNegative = variant === 'fill-negative';
  const isOutline = variant === 'outline';
  const isLine = variant === 'line';

  const liClasses = cn(LinkListStyles['link-list'], {
    [LinkListStyles['link-list__list-item--line']]: isLine,
    [LinkListStyles['link-list__list-item--outline']]: isOutline,
    [LinkListStyles[`link-list__list-item--outline--${color}`]]: isOutline,
  });
  const linkClasses = cn(
    LinkListStyles['link-list__anchor'],
    LinkListStyles[`link-list__anchor--${color}`],
    {
      [LinkListStyles[`link-list__anchor--line--${color}`]]: isLine,
      [LinkListStyles['link-list__anchor--fill']]: isFill,
      [LinkListStyles[`link-list__anchor--fill--${color}`]]: isFill,
      [LinkListStyles['link-list__anchor--outline']]: isOutline,
      [LinkListStyles[`link-list__anchor--outline--${color}`]]: isOutline,
      [LinkListStyles['link-list__anchor--fill-negative']]: isFillNegative,
      [LinkListStyles[`link-list__anchor--fill-negative--${color}`]]: isFillNegative,
      [LinkListStyles[`link-list__anchor--${size}`]]: size,
      [LinkListStyles['link-list__anchor--button']]: htmlMarkup === 'button',
      [LinkListStyles['link-list__anchor--new']]: status === 'new',
    },
    className
  );

  const statusMarkerClasses = cn(LinkListStyles['link-list__status-marker'], {
    [LinkListStyles['link-list__status-marker--new']]: status === 'new',
  });

  const imageContainer = <span className={LinkListStyles['link-list__image-container']}>{image}</span>;

  return editMode ? (
    <div id={contentId} className={liClasses} data-testid={testId} data-analyticsid={AnalyticsId.Link}>
      <div className={linkClasses}>
        <div className={statusMarkerClasses}></div>
        {renderElementHeader(children, {
          titleHtmlMarkup: 'span',
          size,
          parentType: 'linklist',
          chevronIcon: chevron ? ChevronRight : undefined,
          icon: icon ?? imageContainer,
          highlightText,
        })}
      </div>
    </div>
  ) : (
    <li className={liClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Link}>
      {htmlMarkup === 'a' ? (
        <a
          className={linkClasses}
          ref={refObject as React.RefObject<HTMLAnchorElement>}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          target={target}
          {...restProps}
        >
          <div className={statusMarkerClasses}></div>
          {renderElementHeader(children, {
            titleHtmlMarkup: 'span',
            isHovered,
            size,
            parentType: 'linklist',
            chevronIcon: chevron ? ChevronRight : undefined,
            icon: icon ?? imageContainer,
            highlightText,
          })}
        </a>
      ) : (
        htmlMarkup === 'button' && (
          <button className={linkClasses} ref={refObject as React.RefObject<HTMLButtonElement>} type="button" {...restProps}>
            <div className={statusMarkerClasses}></div>
            {renderElementHeader(children, {
              titleHtmlMarkup: 'span',
              isHovered,
              size,
              parentType: 'linklist',
              chevronIcon: chevron ? ChevronRight : undefined,
              icon: icon ?? imageContainer,
              highlightText,
            })}
          </button>
        )
      )}
    </li>
  );
});

export const LinkList = React.forwardRef(function LinkListForwardedRef(props: LinkListProps, ref: React.Ref<HTMLUListElement>) {
  const {
    children,
    className = '',
    chevron = false,
    size = 'medium',
    color = 'white',
    testId,
    variant = 'line',
    highlightText,
    editMode = false,
    resources,
  } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemLinkList = {
    ...defaultResources,
    ...resources,
  };

  const listClassNames = cn(LinkListStyles['link-list'], className, {
    [LinkListStyles[`link-list--outline--${color}`]]: variant === 'outline',
    [listEditModeWrapperClassnames]: editMode,
  });

  return (
    <ul ref={ref} className={listClassNames} data-testid={testId} data-analyticsid={AnalyticsId.LinkList}>
      {React.Children.map(children, (child: React.ReactNode, index) => {
        if (React.isValidElement<LinkProps>(child) && child.type === Link) {
          if (editMode) {
            const childResources = child.props.resources;
            const deleteAriaLabel = childResources?.editMode_deleteButtonAriaLabel ?? mergedResources.editMode_deleteButtonAriaLabel;
            const itemId = `linklist-item-${index}`;

            return (
              <ListEditModeItem
                color={color}
                variant={variant}
                onDelete={child.props.onDelete}
                contentId={itemId}
                deleteButtonAriaLabel={deleteAriaLabel}
              >
                {React.cloneElement(child, {
                  color,
                  size,
                  chevron: false,
                  variant,
                  highlightText: highlightText,
                  editMode: true,
                  contentId: itemId,
                })}
              </ListEditModeItem>
            );
          } else {
            return React.cloneElement(child, {
              color,
              size,
              chevron,
              variant,
              highlightText: highlightText,
              editMode: false,
            });
          }
        }
        return null;
      })}
    </ul>
  );
}) as CompoundComponent;

LinkList.displayName = 'LinkList';
LinkList.Link = Link;
Link.displayName = 'LinkList.Link';

export default LinkList;
