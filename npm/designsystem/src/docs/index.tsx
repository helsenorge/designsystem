import * as React from 'react';

import { Title, Subtitle, Description, Primary, ArgTypes, Stories } from '@storybook/addon-docs';

interface DocsProps<T> {
  component: T;
  hideStories?: boolean;
}

export const isSupernova = (): boolean => {
  const url = window.location != window.parent.location ? document.referrer : document.location.href;
  return url.startsWith('https://frankenstein.helsenorge.design') || window.location.search.includes('isSupernova');
};

const Docs = <T,>(props: DocsProps<T>): React.JSX.Element => {
  if (isSupernova()) {
    return <ArgTypes of={props.component} />;
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
      <ArgTypes of={props.component} />
      {!props.hideStories && <Stories />}
    </>
  );
};

export default Docs;
