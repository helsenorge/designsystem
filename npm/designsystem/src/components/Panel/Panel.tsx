import React from 'react';

import classNames from 'classnames';

import PanelBase from './PanelBase';
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

export interface PanelProps {
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
  /** Control the expanded state for an expandable panel */
  expanded?: boolean;
  /** Opt-out boolean for turning off the expander button when expandable content is used */
  showExpandButton?: boolean;
  /** todo: delete this */
  scrollProp?: number;
}

const Panel: React.FC<PanelProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
  ExpandedContent: React.FC<ContentProps>;
} = (props: PanelProps) => {
  const panelRef = React.useRef<HTMLDivElement>(null);

  const { content, preContainer, outerLayout, contentContainerLayout, todoRenameVariable } = PanelBase(props);

  return (
    <div className={todoRenameVariable}>
      <div className={outerLayout} data-testid={props.testId} ref={panelRef}>
        {preContainer}
        <div className={contentContainerLayout}>{content}</div>
      </div>
    </div>
  );
};

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

export const ExpandedContent: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__expander__content']);
  return <div className={styling}>{children}</div>;
};

Panel.PreContainer = PreContainer;
// @todo Navngivning på bokser
Panel.A = A;
Panel.B = B;
Panel.C = C;
Panel.ExpandedContent = ExpandedContent;

export default Panel;
