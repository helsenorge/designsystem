import React from 'react';

import { ValidationErrors } from './types';
import ValidationSummary from './ValidationSummary';
import { AnalyticsId, FormSize } from '../../constants';
import { isComponent } from '../../utils/component';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';

import styles from './styles.module.scss';

interface ValidationProps {
  /** Error summary title */
  errorTitle?: string;
  /** Validation errors. If errors include references to HTML elements, the errors will be rendered as links with an onClick handler to focus the element. */
  errors?: ValidationErrors;
  /** Items in the Validation compontent */
  children?: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the visuals of the formgroup */
  size?: keyof typeof FormSize;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Validation = React.forwardRef((props: ValidationProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const renderChild = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<FormGroupProps>(child, FormGroup)) {
      return React.cloneElement(child, {
        errorWrapperClassName: styles['validation__error-wrapper'],
      });
    }
    if (React.isValidElement(child) && child.type === React.Fragment) {
      return React.Children.map(child.props.children, (child: React.ReactNode) => {
        return renderChild(child);
      });
    }

    return child;
  };

  return (
    <>
      <div data-testid={props.testId} data-analyticsid={AnalyticsId.Validation} className={props.className} ref={ref}>
        {React.Children.map(props.children, (child: React.ReactNode) => renderChild(child))}
      </div>
      <ValidationSummary errorTitle={props.errorTitle} errors={props.errors} />
    </>
  );
});

Validation.displayName = 'Validation';

export default Validation;
