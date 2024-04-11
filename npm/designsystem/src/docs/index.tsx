import * as React from 'react';

import { Title, Subtitle, Description, Primary, ArgTypes, Stories } from '@storybook/addon-docs';

interface DocsProps<T> {
  component: T;
}

export const isSupernova = (): boolean =>
  window.parent.location.hostname === 'frankenstein.helsenorge.design' || window.location.search.includes('isSupernova');

const Docs = <T,>(props: DocsProps<T>): React.JSX.Element => {
  if (isSupernova()) {
    return <ArgTypes of={props.component} />;
  }

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <ArgTypes of={props.component} />
      <Stories />
    </>
  );
};

export default Docs;
