import React from 'react';

import classNames from 'classnames';

import { PaletteNames } from '../../theme/palette';

import styles from './styles.module.scss';

export enum PanelLayout {
  vertical = 'vertical',
  horizontal = 'horizontal',
  combined = 'combined',
  bAsRightCol = 'bAsRightCol',
}

export type PanelColors = Extract<PaletteNames, 'white' | 'neutral'>;

export enum PanelVariant {
  fill = 'fill',
  line = 'line',
  border = 'border',
}

export enum PanelStacking {
  default = 'default',
  bFirst = 'bFirst',
}

export enum PanelStatus {
  normal = 'normal',
  new = 'new',
  error = 'error',
  draft = 'draft',
}

export interface PanelBaseProps {
  /** Sets the layout and order of the content boxes */
  layout?: PanelLayout;
  /** Sets the visual variant of panel */
  variant?: PanelVariant;
  /** Sets the color for panel if it has variant fill */
  color?: PanelColors;
  /** Sets the stacking order of the content boxes */
  stacking?: PanelStacking;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Children elements to be rendered inside the panel */
  children?: React.ReactNode;
  /** Displays a status on the left side: default normal */
  status?: PanelStatus;
}

export interface ContentProps {
  /** Children elements to be rendered inside the content box */
  children?: React.ReactNode;
}

export const PreContainer: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles['panel__pre-container']}>{children}</div>;
};

export const A: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--a']);
  return <div className={styling}>{children}</div>;
};

export const B: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--b']);
  return <div className={styling}>{children}</div>;
};

export const C: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--c']);
  return <div className={styling}>{children}</div>;
};

interface BaseValues {
  content: React.ReactNode[];
  preContainer: React.ReactNode[];
  outerLayout: string;
  contentContainerLayout: string;
  colorScheme: string;
  todoRenameVariable: string;
}

const PanelBase = ({
  children,
  variant = PanelVariant.fill,
  color = 'neutral',
  stacking = PanelStacking.default,
  status,
  layout = PanelLayout.vertical,
}: PanelBaseProps): BaseValues => {
  let localHasIcon = false;
  const newPreContainer: React.ReactNode[] = [];
  const newContent: React.ReactNode[] = [];

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === PreContainer) {
        newPreContainer.push(child);
        if (child.props.children) {
          if (React.Children.toArray(child.props.children).some(grandChild => React.isValidElement(grandChild) && grandChild.props.icon)) {
            localHasIcon = true;
          }
        }
      } else if (child.type === A || child.type === B || child.type === C) {
        newContent.push(child);
        if (child.type === A && child.props.children) {
          if (React.Children.toArray(child.props.children).some(grandChild => React.isValidElement(grandChild) && grandChild.props.icon)) {
            localHasIcon = true;
          }
        }
      }
    }
  });

  const colorScheme = variant === PanelVariant.fill ? color : 'white';
  const outerLayout = classNames(styles['panel'], styles[`panel--${variant}`], styles[`panel--${colorScheme}`], {
    [styles['panel--new']]: status === PanelStatus.new,
    [styles['panel--draft']]: status === PanelStatus.draft,
    [styles['panel--error']]: status === PanelStatus.error,
    [styles['panel--status']]: status && status !== PanelStatus.normal,
    [styles['panel--icon']]: localHasIcon,
  });
  const contentContainerLayout = classNames(styles['panel__content'], styles[`panel__content--${layout}`], {
    [styles[`panel__content--b-first`]]: stacking === PanelStacking.bFirst, // @todo: fiks stacking
  });
  const todoRenameVariable = classNames({
    [styles['panel__border--outline']]: variant === PanelVariant.border,
    [styles['panel__border--line']]: variant === PanelVariant.line,
  });

  return {
    content: newContent,
    preContainer: newPreContainer,
    outerLayout,
    contentContainerLayout,
    colorScheme,
    todoRenameVariable,
  };
};

export default PanelBase;
