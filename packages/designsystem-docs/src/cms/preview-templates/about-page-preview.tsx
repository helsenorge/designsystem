import React from 'react';

import {AboutPageTemplate} from '../../templates/about-page';

interface AboutPagePreviewProps {
  entry: {getIn: (data: Array<string>) => string};
  widgetFor: (content: string) => JSX.Element;
}

const AboutPagePreview = ({entry, widgetFor}: AboutPagePreviewProps): JSX.Element => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    preamble={entry.getIn(['data', 'preamble'])}
    pdf={entry.getIn(['data', 'pdf'])}
    content={widgetFor('body')}
  />
);

export default AboutPagePreview;
