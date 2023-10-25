import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormSize } from '../../constants';

import formGroupStyles from './styles.module.scss';

export enum FormLayoutColumns {
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
}

export interface FormLayoutProps {
  /** The max number of columns that will exist if space is available */
  maxColumns?: keyof typeof FormLayoutColumns;
  /** Sets the minimum width for the columns in pixels - this determines how many will fit on a row */
  colMinWidth?: number;
  /** Items in the FormLayout component */
  children?: React.ReactNode;
  /** Changes the visuals of the formgroup */
  size?: keyof typeof FormSize;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Function that helps map the form children */
  mapHelper?: (child: React.ReactNode, index: number) => React.ReactNode;
}

export const FormLayout = React.forwardRef((props: FormLayoutProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { maxColumns: columns = FormLayoutColumns.one, colMinWidth = 300, size, className, mapHelper } = props;

  const cssVariable = { '--min-col-width': `${colMinWidth}px` } as React.CSSProperties;
  const formLayoutContainerClasses = classNames(
    formGroupStyles['form-layout-container'],
    {
      [formGroupStyles['form-layout-container--large']]: size === FormSize.large,
    },
    className
  );
  const formLayoutChildClasses = classNames(formGroupStyles['form-layout-child'], {
    [formGroupStyles['form-layout-child--two']]: columns === FormLayoutColumns.two,
    [formGroupStyles['form-layout-child--three']]: columns === FormLayoutColumns.three,
    [formGroupStyles['form-layout-child--four']]: columns === FormLayoutColumns.four,
    [formGroupStyles['form-layout-child--five']]: columns === FormLayoutColumns.five,
  });

  return (
    <div
      data-testid={props.testId}
      data-analyticsid={AnalyticsId.FormLayout}
      style={cssVariable}
      className={formLayoutContainerClasses}
      ref={ref}
    >
      {React.Children.map(props.children, (child: React.ReactNode, index: number) => {
        return <div className={formLayoutChildClasses}>{mapHelper ? mapHelper(child, index) : child}</div>;
      })}
    </div>
  );
});

FormLayout.displayName = 'FormLayout';

export default FormLayout;
