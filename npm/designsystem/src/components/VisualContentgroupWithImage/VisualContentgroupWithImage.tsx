import classNames from 'classnames';

import styles from './styles.module.scss';

export type ImageRatios = 'square' | 'landscape';

export interface VisualContentgroupWithImageProps {
  /** Set the ratio of the image. */
  imageRatio?: ImageRatios;
  /** Content rendered inside the visualcontent area. */
  visualContent: React.ReactNode;
  /** Content rendered inside the component */
  children: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const VisualContentgroupWithImage: React.FC<VisualContentgroupWithImageProps> = props => {
  const { imageRatio = 'square', visualContent, children, testId } = props;

  return (
    <div data-testid={testId} className={styles['visual-contentgroup-with-image']}>
      <div
        className={classNames(styles['visual-contentgroup-with-image__frame'], {
          [styles[`visual-contentgroup-with-image__frame--${imageRatio}`]]: imageRatio,
        })}
      >
        {visualContent}
      </div>
      {children}
    </div>
  );
};

export default VisualContentgroupWithImage;
