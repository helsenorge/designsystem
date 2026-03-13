import type { DummyFilter } from '../DrawerNavigationWithContext/utils';

import Button from '../../Button';
import DrawerNavigation from '../DrawerNavigationWithContext';
import FilterOverviewView from '../DrawerNavigationWithContext/FilterOverviewView';

interface FilterPOCWithContextProps {
  isOpen: boolean;
  onCloseButton: () => void;
  filters: DummyFilter[];
  children: React.ReactNode;
  overviewTitle?: string;
  /** Custom overview content. If provided, replaces the default FilterOverviewView. */
  overviewContent?: React.ReactNode;
}

const FilterPOCWithContext = ({
  isOpen,
  onCloseButton,
  filters,
  children,
  overviewTitle = 'Filter',
  overviewContent,
}: FilterPOCWithContextProps): React.ReactNode => {
  const footerButtons = (
    <div>
      <Button onClick={onCloseButton} variant="borderless">
        {'Nullstill'}
      </Button>
      <Button onClick={onCloseButton}>{'Vis treff'}</Button>
    </div>
  );

  return (
    <DrawerNavigation isOpen={isOpen} onCloseButton={onCloseButton} footer={footerButtons}>
      <DrawerNavigation.View id="overview" title={overviewTitle} home>
        {overviewContent ?? <FilterOverviewView filters={filters} />}
      </DrawerNavigation.View>
      {children}
    </DrawerNavigation>
  );
};

export default FilterPOCWithContext;
