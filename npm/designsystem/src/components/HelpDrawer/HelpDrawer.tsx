import React from 'react';

import { getColor } from '../../theme/currys';
import Drawer, { DrawerProps } from '../Drawer';

import styles from './styles.module.scss';

export interface HelpDrawerProps extends DrawerProps {
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpDrawer: React.FC<HelpDrawerProps> = props => {
  const { ...rest } = props;
  return <Drawer {...rest} color={getColor('plum', 700)} headerClasses={styles['help-drawer']} />;
};

export default HelpDrawer;
