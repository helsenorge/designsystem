import { Title, Subtitle, Description, Primary, ArgTypes, Stories, Controls } from '@storybook/addon-docs';

import Panel from './Panel';
import TitleFS from '../Title';

export const isSupernova = (): boolean => {
  const url = window.location != window.parent.location ? document.referrer : document.location.href;
  return url.startsWith('https://frankenstein.helsenorge.design') || window.location.search.includes('isSupernova');
};

export const PanelDocs = (): React.JSX.Element => {
  if (isSupernova()) {
    return <ArgTypes />;
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
        {'Panel.PreContainer'}
      </TitleFS>
      <ArgTypes of={Panel} include={['children']} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.A'}
      </TitleFS>
      <ArgTypes of={Panel} include={['children']} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.B'}
      </TitleFS>
      <ArgTypes of={Panel} include={['children']} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.C'}
      </TitleFS>
      <ArgTypes of={Panel} include={['children']} />
      <Stories />
    </>
  );
};
