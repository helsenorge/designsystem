import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const TimePassing: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M22.491 19.368v7.126h5.585v-1h-4.585v-6.126h-1zm15.484 4.846c0 3.77-1.467 7.314-4.133 9.98a14.021 14.021 0 01-9.979 4.133 14.024 14.024 0 01-9.979-4.134c-2.92-2.919-4.383-6.985-4.07-11.072l-3.496 3.181-.875-.96 5.272-4.799 4.833 4.833-.919.92-3.479-3.479c-.418 3.846.906 7.71 3.654 10.456a12.722 12.722 0 009.06 3.753c3.421 0 6.64-1.332 9.06-3.753a12.724 12.724 0 003.752-9.059 12.73 12.73 0 00-3.753-9.06c-4.286-4.284-11.06-4.974-16.109-1.642l-.717-1.084c5.562-3.674 13.025-2.914 17.745 1.806a14.02 14.02 0 014.133 9.98z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M28.076 25.494h-4.585v-6.125h-1v7.125h5.585v-1zm10.053-1.182c0 7.783-6.33 14.114-14.112 14.114S9.905 32.095 9.905 24.312c0-4.13 1.838-8.04 4.95-10.707l-4.72-.222.06-1.3 7.12.337v6.835h-1.3v-4.92c-3.014 2.424-4.81 6.093-4.81 9.977 0 7.066 5.746 12.813 12.812 12.813 7.064 0 12.811-5.747 12.811-12.813 0-6.06-4.3-11.34-10.229-12.551l.261-1.274c6.53 1.336 11.27 7.15 11.27 13.825z"
    />
  );

  const small = (
    <path
      fillRule={'evenodd'}
      d="M22.36 19.368v7.257h5.716v-1.263h-4.453v-5.994H22.36zm11.648 14.991a14.3 14.3 0 01-10.145 4.195A14.303 14.303 0 0113.72 34.36a14.384 14.384 0 01-4.186-10.666l-3.057 2.782-1.191-1.308 5.438-4.946 4.99 4.99-1.249 1.25-3.133-3.13c-.25 3.61 1.056 7.197 3.638 9.778 4.904 4.904 12.885 4.904 17.788 0 4.905-4.905 4.905-12.883 0-17.788-4.206-4.208-10.857-4.884-15.815-1.613l-.974-1.476C21.624 8.5 29.21 9.27 34.008 14.07c5.593 5.594 5.593 14.695 0 20.29z"
    />
  );

  const smallHover = (
    <path
      fillRule={'evenodd'}
      d="M28.076 25.362h-4.454v-5.994H22.36v7.257h5.717v-1.263zm10.287-1.05c0 7.911-6.435 14.347-14.345 14.347-7.911 0-14.347-6.436-14.347-14.347 0-3.999 1.689-7.805 4.581-10.502l-4.128-.194.082-1.766 7.344.345v7.06h-1.768v-4.43c-2.732 2.378-4.343 5.837-4.343 9.487 0 6.936 5.642 12.579 12.579 12.579 6.935 0 12.577-5.643 12.577-12.579 0-5.95-4.223-11.132-10.042-12.323l.355-1.732c6.638 1.358 11.455 7.27 11.455 14.055z"
    />
  );

  return getIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default TimePassing;
