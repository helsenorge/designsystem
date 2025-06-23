import React from 'react';

import { getResources } from './resourceHelper';
import { LanguageLocales } from '../../constants';
import { HNDesignsystemHelpDrawer } from '../../resources/Resources';
import { useLanguage } from '../../utils/language';
import Drawer, { DrawerProps } from '../Drawer';

import styles from './styles.module.scss';

export interface HelpDrawerProps
  extends Pick<
    DrawerProps,
    | 'ariaLabel'
    | 'ariaLabelledBy'
    | 'ariaLabelCloseBtn'
    | 'children'
    | 'isOpen'
    | 'onRequestClose'
    | 'title'
    | 'titleHtmlMarkup'
    | 'titleId'
    | 'zIndex'
  > {
  /** Resources for the component */
  resources?: Partial<HNDesignsystemHelpDrawer>;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpDrawer: React.FC<HelpDrawerProps> = props => {
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const mergedResources: HNDesignsystemHelpDrawer = {
    ...defaultResources,
    ...props.resources,
    ariaLabel: props.ariaLabel ?? props.resources?.ariaLabel ?? defaultResources.ariaLabel,
  };

  return (
    <Drawer
      {...props}
      closeColor={'plum'}
      headerClasses={styles['help-drawer']}
      desktopDirection={'left'}
      ariaLabel={mergedResources.ariaLabel}
    />
  );
};

export default HelpDrawer;
