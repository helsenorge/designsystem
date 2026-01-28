import React from 'react';

import type { ValidationErrors } from './types';
import type { FormSize } from '../../constants';
import type { CheckboxProps } from '../Checkbox';
import type { ErrorWrapperClassNameProps } from '../ErrorWrapper';
import type { FormGroupProps } from '../FormGroup/FormGroup';
import type { InputProps } from '../Input';
import type { RadioButtonProps } from '../RadioButton';
import type { SelectProps } from '../Select';
import type { SliderProps } from '../Slider';
import type { TextareaProps } from '../Textarea';

import ValidationSummary from './ValidationSummary';
import { AnalyticsId } from '../../constants';
import { isComponent, isComponentWithDisplayName } from '../../utils/component';
import Checkbox from '../Checkbox';
import FormGroup from '../FormGroup/FormGroup';
import Input from '../Input';
import RadioButton from '../RadioButton';
import Select from '../Select';
import Slider from '../Slider';
import Textarea from '../Textarea';

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
  /** Hides the ValidationSummary list visually - summary is still announced by screen readers */
  visuallyHiddenSummary?: boolean;
  /** Ref passed to the component */
  ref?: React.Ref<HTMLDivElement | null>;
}

export const Validation: React.FC<ValidationProps> = (props: ValidationProps) => {
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
      isComponent<SliderProps>(child, Slider) ||
      isComponentWithDisplayName<ErrorWrapperClassNameProps>(child, 'DateTimePickerWrapper') ||
      isComponentWithDisplayName<ErrorWrapperClassNameProps>(child, 'DatePicker') ||
      isComponentWithDisplayName<ErrorWrapperClassNameProps>(child, 'DateTime')
    ) {
      return cloneFormElement<ErrorWrapperClassNameProps>(child);
    }
    if (isComponent<React.FragmentProps>(child, React.Fragment)) {
      return React.Children.map(child.props.children, (child: React.ReactNode) => {
        return renderChild(child);
      });
    }

    return child;
  };

  return (
    <>
      <div data-testid={props.testId} data-analyticsid={AnalyticsId.Validation} className={props.className} ref={props.ref}>
        {React.Children.map(props.children, (child: React.ReactNode) => renderChild(child))}
      </div>
      <ValidationSummary errorTitle={props.errorTitle} errors={props.errors} visuallyHidden={props.visuallyHiddenSummary} />
    </>
  );
};

Validation.displayName = 'Validation';

export default Validation;
