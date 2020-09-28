import React from 'react';
import {PreviewTemplateComponentProps} from 'netlify-cms-core';

import {AboutPageTemplate} from '../../cms-templates/about-page';
import PreviewWrapper from '../preview-wrapper';

const AboutPagePreview = ({entry, widgetFor}: PreviewTemplateComponentProps): JSX.Element => (
  <PreviewWrapper>
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      preamble={entry.getIn(['data', 'preamble'])}
      pdf={entry.getIn(['data', 'pdf'])}
      content={widgetFor('body')}
    />
  </PreviewWrapper>
);

export default AboutPagePreview;
