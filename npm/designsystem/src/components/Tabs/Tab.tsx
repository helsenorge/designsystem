import type React from 'react';

import type { SvgIcon } from '../Icon';
import type { IconName } from '../Icons/IconNames';

export interface TabProps {
  /** Sets the tab panel content */
  children?: React.ReactNode;
  /** Optional icon on the tab */
  icon?: SvgIcon | IconName;
  /** Called when tab is selected */
  onTabClick?: (index: number) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Title on the tab */
  title?: string;
}

const Tab: React.FC<TabProps> = props => {
  return <>{props.children ?? null}</>;
};

export default Tab;
