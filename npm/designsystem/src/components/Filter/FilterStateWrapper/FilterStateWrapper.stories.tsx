import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta, StoryObj } from '@storybook/react-vite';

import FilterStateWrapper from './FilterStateWrapper';
import Chip from '../../Chip';
import NotificationPanel from '../../NotificationPanel';
import FilterButton from '../FilterButton/FilterButton';
import FilterButtonAndChipsWrapper from '../FilterButtonAndChipsWrapper/FilterButtonAndChipsWrapper';
import FilterResultCountAndSortWrapper from '../FilterResultCountAndSortWrapper/FilterResultCountAndSortWrapper';
import FilterSort from '../FilterSort';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterStateWrapper',
  component: FilterStateWrapper,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterStateWrapper} />,
    },
  },
  args: {
    children: (
      <>
        <FilterButtonAndChipsWrapper filterButtonComponent={<FilterButton />} filterChips={[]} />
        <FilterResultCountAndSortWrapper resultCount={<span>{'3 treff'}</span>} />
      </>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof FilterStateWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args): React.JSX.Element => <FilterStateWrapper {...args} />,
};

export const WithChildren: Story = {
  render: (): React.JSX.Element => (
    <FilterStateWrapper>
      <>
        <FilterButtonAndChipsWrapper filterButtonComponent={<FilterButton />} filterChips={[<Chip>{'Parameter 1'}</Chip>]} />
        <FilterResultCountAndSortWrapper
          resultCount={<span aria-live="polite">{'3 treff'}</span>}
          sortComponent={
            <FilterSort
              children={
                <>
                  <option value={'Option 1'}>{'Nyest-Eldst'}</option>
                  <option value={'Option 2'}>{'Eldst-Nyest'}</option>
                  <option value={'Option 3'}>{'Alfabetisk A-Å'}</option>
                  <option value={'Option 4'}>{'Alfabetisk Å-A'}</option>
                </>
              }
            />
          }
        />
      </>
    </FilterStateWrapper>
  ),
};

export const WithNotificationPanel: Story = {
  render: (): React.JSX.Element => (
    <FilterStateWrapper>
      <FilterButtonAndChipsWrapper filterButtonComponent={<FilterButton />} filterChips={[<Chip>{'Siste 12 måneder'}</Chip>]} />
      <NotificationPanel compactVariant="outline">
        {
          'Finner du ikke dokumentet du leter etter kan det skyldes nedetid hos behandlingsstedet eller at perioden du har angitt er for lang.'
        }
      </NotificationPanel>
      <FilterResultCountAndSortWrapper
        resultCount={<span>{'3 treff'}</span>}
        sortComponent={
          <FilterSort
            children={
              <>
                <option value={'Option 1'}>{'Nyeste først'}</option>
                <option value={'Option 2'}>{'Eldste først'}</option>
              </>
            }
          />
        }
      />
    </FilterStateWrapper>
  ),
};
