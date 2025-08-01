import { Title, Subtitle, Description, Primary, ArgTypes, Stories, Controls } from '@storybook/addon-docs/blocks';

import { A, B, C, ExpandedContent, PreContainer } from './Panel';
import TitleFS from '../Title';
import PanelTitle from './PanelTitle';

export const PanelDocs = (): React.JSX.Element => {
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
        {'Panel.Title'}
      </TitleFS>
      <ArgTypes of={PanelTitle} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.PreContainer'}
      </TitleFS>
      <ArgTypes of={PreContainer} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.A'}
      </TitleFS>
      <ArgTypes of={A} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.B'}
      </TitleFS>
      <ArgTypes of={B} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.C'}
      </TitleFS>
      <ArgTypes of={C} />
      <TitleFS htmlMarkup="h3" appearance="title3">
        {'Panel.ExpandedContent'}
      </TitleFS>
      <ArgTypes of={ExpandedContent} />
      <Stories />
    </>
  );
};
