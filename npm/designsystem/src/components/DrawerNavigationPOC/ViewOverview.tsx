import ElementHeader from '../ElementHeader';
import LinkList from '../LinkList';
import Tag from '../Tag';
import TagList from '../TagList';
import { DrawerNavigationCommonProps, ViewConfig } from './DrawerNavigationPOC';

export interface DummyFilter {
  title: string;
  activeFilters: string[];
  viewId?: string;
  onClick?: () => void;
}

export interface ViewOverviewProps {
  filters: DummyFilter[];
}

export type ViewOverviewConfig = ViewConfig<ViewOverviewProps>;

const ViewOverview: React.FC<DrawerNavigationCommonProps & ViewOverviewProps> = ({ filters, navigate }) => {
  return (
    <div>
      <LinkList chevron>
        {filters.map(filter => (
          <LinkList.Link
            key={filter.title}
            onClick={() => (filter.onClick ? filter.onClick() : filter.viewId && navigate.goToView(filter.viewId))}
          >
            <ElementHeader>
              <span>{filter.title}</span>
              <br />
              <TagList>
                {filter.activeFilters.map(chipTitle => (
                  <Tag key={chipTitle}>{chipTitle}</Tag>
                ))}
              </TagList>
            </ElementHeader>
          </LinkList.Link>
        ))}
      </LinkList>
    </div>
  );
};

export default ViewOverview;
