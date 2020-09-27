import {SimplePageTemplate} from '../../templates/simple-page';
import PropTypes from 'prop-types';
import React from 'react';

interface SimplePagePreviewProps {
  entry: {getIn: (data: Array<string>) => string};
  widgetFor: (content: string) => JSX.Element;
}

const SimplePagePreview = ({entry, widgetFor}: SimplePagePreviewProps): JSX.Element => (
  <SimplePageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default SimplePagePreview;
