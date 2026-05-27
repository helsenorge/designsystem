import classNames from 'classnames';

import styles from './styles.module.scss';

export interface VisualContentProps {
  /** Image URL (supports `fit`, `focus` query params) or any React node. */
  children: React.ReactNode | string;
  /** Adds custom classes to the root element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const parseStyle = (src: string): React.CSSProperties => {
  try {
    const params = new URL(src, 'http://_').searchParams;
    return {
      objectFit: (params.get('fit') as React.CSSProperties['objectFit']) ?? undefined,
      objectPosition: params.get('focus') ?? undefined,
    };
  } catch {
    return {};
  }
};

const renderImage = (src: string): React.ReactElement => (
  <span style={{ position: 'relative', display: 'block', width: '100%', height: '100%', aspectRatio: '1 / 1' }}>
    <img
      src={src}
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...parseStyle(src) }}
    />
  </span>
);

export const VisualContent: React.FC<VisualContentProps> = props => {
  const { children, className, testId } = props;

  return (
    <span className={classNames(styles['visual-checkbox__visual-content'], className)} data-testid={testId} aria-hidden="true">
      {typeof children === 'string' ? renderImage(children) : children}
    </span>
  );
};

export default VisualContent;
