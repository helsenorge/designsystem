import { Title, Subtitle, Description, Primary, ArgTypes, Stories, Controls } from '@storybook/addon-docs/blocks';
import { isSupernova } from 'frankenstein-build-tools';

import { Title as TitleFS } from '../Title';
import Tab from './Tab';

export const TabsDocs = (): React.JSX.Element => {
  if (isSupernova()) {
    return (
      <>
        <TitleFS htmlMarkup="h2" appearance="title2">
          {'Tabs'}
        </TitleFS>
        <ArgTypes />
        <TitleFS htmlMarkup="h3" appearance="title3">
          {'Tabs.Tab'}
        </TitleFS>
        <ArgTypes of={Tab} />
      </>
    );
  }

  const searchParams = new URLSearchParams(window.location.search);
  const newWindowUrl = `${window.location.pathname}?id=${searchParams.get('id')}&viewMode=docs`;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title />
        <div>
          <a target="_blank" href={newWindowUrl} rel="noreferrer">
            {'Åpne i ny fane'}
          </a>
        </div>
      </div>
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <TitleFS htmlMarkup="h2" appearance="title2">
        {'Subcomponents'}
      </TitleFS>
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Tabs.Tab'}
      </TitleFS>
      <ArgTypes of={Tab} />
      <Stories />
    </>
  );
};
