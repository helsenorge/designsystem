import * as React from 'react';

import { Title, Subtitle, Description, Primary, ArgTypes, Stories } from '@storybook/addon-docs';

interface DocsProps<T> {
  component: T;
}

export const isSupernova = (): boolean =>
  window.location.ancestorOrigins.contains('https://frankenstein.helsenorge.design') || window.location.search.includes('isSupernova');

const Docs = <T,>(props: DocsProps<T>): React.JSX.Element => {
  if (isSupernova()) {
    return <ArgTypes of={props.component} />;
  }

  var url = window.location != window.parent.location ? document.referrer : document.location.href;
  console.log(url);

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
