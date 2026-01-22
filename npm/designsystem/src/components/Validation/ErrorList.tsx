import type React from 'react';

import type { ValidationErrors } from './types';

import ErrorListItem from './ErrorListItem';
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
