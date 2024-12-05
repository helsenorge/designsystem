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

export type PanelColors = Extract<PaletteNames, 'white' | 'neutral'>;

export enum PanelNewVariant {
  fill = 'fill',
  line = 'line',
  border = 'border',
}

export enum PanelNewStacking {
  default = 'default',
  bFirst = 'bFirst',
}

export enum PanelNewStatus {
  normal = 'normal',
  new = 'new',
  error = 'error',
  draft = 'draft',
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
  /** Displays a status on the left side: default normal */
  status?: PanelNewStatus;
}

const PanelNew: React.FC<PanelNewProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
} = ({
  layout = PanelNewLayout.horizontal,
  variant = PanelNewVariant.fill,
  color = 'neutral',
  stacking = PanelNewStacking.default,
  testId,
  children,
  status = PanelNewStatus.normal,
}: PanelNewProps) => {
  const preContainer: React.ReactNode[] = [];
  const content: React.ReactNode[] = [];

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === PreContainer) {
        preContainer.push(child);
      } else if (child.type === A || child.type === B || child.type === C) {
        content.push(child);
      }
    }
  });

  const colorScheme = variant === PanelNewVariant.fill ? color : 'white';
  const outerLayout = classNames(styles['panel'], styles[`panel--${variant}`], styles[`panel--${colorScheme}`], {
    [styles[`panel--b-first`]]: stacking == 'bFirst',
    [styles['panel--new']]: status === PanelNewStatus.new,
    [styles['panel--draft']]: status === PanelNewStatus.draft,
    [styles['panel--error']]: status === PanelNewStatus.error,
    [styles['panel--status']]: status && status !== PanelNewStatus.normal,
  });
  const contentLayout = classNames(styles['panel__content'], styles[`panel__content--${layout}`]);

  return (
    <div className={outerLayout} data-testid={testId}>
      {preContainer}
      <div className={contentLayout}>{content}</div>
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
