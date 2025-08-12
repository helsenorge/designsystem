import React from 'react';

import classNames from 'classnames';

import ErrorList from './ErrorList';
import { ValidationErrors } from './types';
import { useUuid } from '../../hooks/useUuid';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

interface ValidationSummaryProps {
  /** Error summary title */
  errorTitle?: string;
  /** Error list */
  errors?: ValidationErrors;
  /** Markup props for error summary title. Default: h2 */
  errorTitleHtmlMarkup?: TitleTags;
  /** Will be shown last */
  children?: React.ReactNode;
}

const ValidationSummary: React.FC<ValidationSummaryProps> = props => {
  const { errorTitleHtmlMarkup = 'h2' } = props;
  const titleId = useUuid();

  const hasErrors = !!props.errors && Object.entries(props.errors).length > 0;

  const summaryClasses = classNames(styles['validation__summary'], hasErrors && styles['validation__summary--visible']);

  return (
    <div aria-labelledby={hasErrors && props.errorTitle ? titleId : undefined} className={summaryClasses}>
      {hasErrors && (
        <>
          {props.errorTitle && (
            <Title appearance="title4" id={titleId} htmlMarkup={errorTitleHtmlMarkup} margin={{ marginTop: 0, marginBottom: 1 }}>
              {props.errorTitle}
            </Title>
          )}
          <ErrorList errors={props.errors!} />
        </>
      )}
      {props.children}
    </div>
  );
};

export default ValidationSummary;
