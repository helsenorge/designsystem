import React from 'react';

import { ValidationErrors } from './types';
import ValidationSummary from './ValidationSummary';
import { AnalyticsId, FormSize } from '../../constants';
import { isComponent, isComponentWithDisplayName } from '../../utils/component';
import Checkbox, { CheckboxProps } from '../Checkbox';
import { ErrorWrapperClassNameProps } from '../ErrorWrapper';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';
import Input, { InputProps } from '../Input';
import RadioButton, { RadioButtonProps } from '../RadioButton';
import Select, { SelectProps } from '../Select';
import Textarea, { TextareaProps } from '../Textarea';

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
  const validationErrorClass = styles['validation__error-wrapper'];

  const cloneFormElement = <T extends ErrorWrapperClassNameProps>(child: React.ReactElement<T>): React.ReactElement<T> => {
    return React.cloneElement(child, {
      ...child.props,
      errorWrapperClassName: validationErrorClass,
    });
  };

  const renderChild = (child: React.ReactNode): React.ReactNode => {
    if (
      isComponent<FormGroupProps>(child, FormGroup) ||
      isComponent<CheckboxProps>(child, Checkbox) ||
      isComponent<RadioButtonProps>(child, RadioButton) ||
      isComponent<TextareaProps>(child, Textarea) ||
      isComponent<InputProps>(child, Input) ||
      isComponent<SelectProps>(child, Select) ||
      isComponentWithDisplayName<ErrorWrapperClassNameProps>(child, 'DateTimePickerWrapper') ||
      isComponentWithDisplayName<ErrorWrapperClassNameProps>(child, 'DatePicker') ||
      isComponentWithDisplayName<ErrorWrapperClassNameProps>(child, 'DateTime')
    ) {
      return cloneFormElement<ErrorWrapperClassNameProps>(child);
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
