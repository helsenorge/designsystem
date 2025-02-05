import React from 'react';

import classNames from 'classnames';

import { A, B, C, PanelLayout, PanelProps, PanelStacking, PanelStatus, PanelVariant, PreContainer } from './Panel';

import styles from './styles.module.scss';

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
}: PanelProps): BaseValues => {
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
