import React from 'react';

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
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpDrawer: React.FC<HelpDrawerProps> = props => {
  return <Drawer {...props} closeColor={'plum'} headerClasses={styles['help-drawer']} desktopDirection={'left'} />;
};

export default HelpDrawer;
