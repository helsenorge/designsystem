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
}

const Panel: React.FC<PanelProps> & {
  PreContainer: React.FC<ContentProps>;
  A: React.FC<ContentProps>;
  B: React.FC<ContentProps>;
  C: React.FC<ContentProps>;
} = ({
  layout = PanelLayout.horizontal,
  variant = PanelVariant.fill,
  color = 'neutral',
  stacking = PanelStacking.default,
  testId,
  children,
  status = PanelStatus.normal,
}: PanelProps) => {
  const [preContainer, setPreContainer] = React.useState<React.ReactNode[]>([]);
  const [content, setContent] = React.useState<React.ReactNode[]>([]);
  const [hasIcon, setHasIcon] = React.useState(false);

  React.useEffect(() => {
    let localHasIcon = false;
    const newPreContainer: React.ReactNode[] = [];
    const newContent: React.ReactNode[] = [];

    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === PreContainer) {
          newPreContainer.push(child);
          if (child.props.children) {
            if (
              React.Children.toArray(child.props.children).some(grandChild => React.isValidElement(grandChild) && grandChild.props.icon)
            ) {
              localHasIcon = true;
            }
          }
        } else if (child.type === A || child.type === B || child.type === C) {
          newContent.push(child);
          if (child.type === A && child.props.children) {
            if (
              React.Children.toArray(child.props.children).some(grandChild => React.isValidElement(grandChild) && grandChild.props.icon)
            ) {
              localHasIcon = true;
            }
          }
        }
      }
    });

    setPreContainer(newPreContainer);
    setContent(newContent);
    setHasIcon(localHasIcon);
  }, [children]);

  const colorScheme = variant === PanelVariant.fill ? color : 'white';
  const outerLayout = classNames(styles['panel'], styles[`panel--${variant}`], styles[`panel--${colorScheme}`], {
    [styles['panel--new']]: status === PanelStatus.new,
    [styles['panel--draft']]: status === PanelStatus.draft,
    [styles['panel--error']]: status === PanelStatus.error,
    [styles['panel--status']]: status && status !== PanelStatus.normal,
    [styles['panel--icon']]: hasIcon,
  });
  const contentContainerLayout = classNames(styles['panel__content'], styles[`panel__content--${layout}`], {
    [styles[`panel__content--b-first`]]: stacking === PanelStacking.bFirst, // @todo: fiks stacking
  });

  return (
    <div className={outerLayout} data-testid={testId}>
      {preContainer}
      <div className={contentContainerLayout}>{content}</div>
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
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--a']);
  return <div className={styling}>{children}</div>;
};

const B: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--b']);
  return <div className={styling}>{children}</div>;
};

const C: React.FC<ContentProps> = ({ children }) => {
  const styling = classNames(styles['panel__content__item'], styles['panel__content__item--c']);
  return <div className={styling}>{children}</div>;
};

Panel.PreContainer = PreContainer;
// @todo Navngivning på bokser
Panel.A = A;
Panel.B = B;
Panel.C = C;

export default Panel;
