import { useEffect, useId } from 'react';

import { useAnimate } from 'motion/react';

import type { HNDesignsystemFilter } from '../../../resources/Resources';

import { AnalyticsId, LanguageLocales } from '../../../constants';
import { useIsMobileBreakpoint } from '../../../hooks/useIsMobileBreakpoint';
import { useLanguage } from '../../../hooks/useLanguage';
import { getResources } from '../resourceHelper';

import styles from './styles.module.scss';

export interface LoaderSpinnerProps {
  /** Resources for the component */
  resources?: Partial<HNDesignsystemFilter>;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const LoaderSpinner: React.FC<LoaderSpinnerProps> = props => {
  const { resources, testId } = props;
  const textId = useId();
  const isMobile = useIsMobileBreakpoint();
  const svgSize = isMobile ? 14 : 19;
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const mergedResources = {
    ...defaultResources,
    ...resources,
  };
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) {
      return;
    }

    animate(scope.current, { rotate: 360 }, { duration: 1.3, ease: 'linear', repeat: Infinity });
  }, []);

  return (
    <div
      data-testid={testId}
      data-analyticsid={AnalyticsId.Loader}
      role="progressbar"
      aria-labelledby={textId}
      className={styles['loader-spinner']}
    >
      <svg
        ref={scope}
        className={styles['loader-spinner__svg']}
        width={svgSize}
        height={svgSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isMobile ? (
          <path d="M1 7a6 6 0 1 1 6 6" strokeWidth="2" strokeLinecap="round" />
        ) : (
          <path d="M1.5 9.5a8 8 0 1 1 8 8" strokeWidth="2.3" strokeLinecap="round" />
        )}
      </svg>
      <span id={textId} className={styles['loader-spinner__text']}>
        {mergedResources.loadingText}
      </span>
    </div>
  );
};

export default LoaderSpinner;
