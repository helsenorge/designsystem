import React from 'react';

import ErrorListItem from './ErrorListItem';
import { ValidationErrors } from './types';
import List from '../List';

interface ErrorListProps {
  errors: ValidationErrors;
}

const ErrorList: React.FC<ErrorListProps> = props => (
  <List>
    {Object.entries(props.errors).map(([name, error]) => (
      <List.Item key={name}>
        <ErrorListItem name={name} error={error} />
      </List.Item>
    ))}
  </List>
);

export default ErrorList;
