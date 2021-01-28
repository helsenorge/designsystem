import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import { SimplePageTemplate } from '../../cms-templates/simple-page';
import PreviewWrapper from '../preview-wrapper';

const SimplePagePreview = ({ entry, widgetFor }: PreviewTemplateComponentProps): JSX.Element => (
  <PreviewWrapper>
    <SimplePageTemplate title={entry.getIn(['data', 'title'])} preamble={entry.getIn(['data', 'preamble'])} content={widgetFor('body')} />
  </PreviewWrapper>
);

export default SimplePagePreview;
