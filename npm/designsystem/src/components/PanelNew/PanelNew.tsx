import React from 'react';

import classNames from 'classnames';

import { PaletteNames } from '../../theme/palette';

import styles from './styles.module.scss';

export enum PanelNewLayout {
  vertical = 'vertical',
  horizontal = 'horizontal',
  combined = 'combined',
  bAsRightCol = 'bAsRightCol',
}

export type PanelColors = Extract<PaletteNames, 'white' | 'blueberry' | 'neutral'>;

export enum PanelNewVariant {
  fill = 'fill',
  line = 'line',
  border = 'border',
}

export enum PanelNewStacking {
  default = 'default',
  bFirst = 'bFirst',
}

export interface PanelNewProps {
  /** Sets the layout and order of the content boxes */
  layout?: PanelNewLayout;
  /** Sets the visual variant of panel */
  variant?: PanelNewVariant;
  /** Sets the color for panel if it has variant fill */
  color?: PanelColors;
  /** Sets the stacking order of the content boxes */
  stacking?: PanelNewStacking;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Children elements to be rendered inside the panel */
  children?: React.ReactNode;
}

const PanelNew: React.FC<PanelNewProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
} = ({
  layout = PanelNewLayout.horizontal,
  variant = PanelNewVariant.fill,
  color = 'white',
  stacking = PanelNewStacking.default,
  testId,
  children,
}: PanelNewProps) => {
  const colorScheme = variant === PanelNewVariant.fill ? color : 'white';
  const outerLayout = classNames(
    styles['panel'],
    styles[`panel--${layout}`],
    styles[`panel--${variant}`],
    styles[`panel--${colorScheme}`],
    {
      [styles[`panel--b-first`]]: stacking == 'bFirst',
    }
  );

  return (
    <div className={outerLayout} data-testid={testId}>
      {children}
    </div>
  );
};

export interface ContentProps {
  children?: React.ReactNode;
}

const PreContainer: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles['panel__pre-container']}>{children}</div>;
};

const A: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content'], styles['panel__content--a']);
  return <div className={styling}>{children}</div>;
};

const B: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content'], styles['panel__content--b']);
  return <div className={styling}>{children}</div>;
};

const C: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content'], styles['panel__content--c']);
  return <div className={styling}>{children}</div>;
};

PanelNew.PreContainer = PreContainer;
// @todo Navngivning på bokser
PanelNew.A = A;
PanelNew.B = B;
PanelNew.C = C;

export default PanelNew;
