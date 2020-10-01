import React from 'react';
import {SvgPathProps} from './Icon';

const Spray: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M31.584 6.68v1.288h2.5v5.151h-2.5v.346l2.905 5.767h-3.955l-2.5-4.962h-2.739v1.2h1.156v4.263l6.801 6.881a2.87 2.87 0 01.832 2.028v10.572A2.888 2.888 0 0131.2 42.1H19.277a2.888 2.888 0 01-2.884-2.885V15.47h1.156v-1.2h-3.633v-2.387A5.209 5.209 0 0119.12 6.68h12.465zm-2.487 17.58H17.693v14.954c0 .874.711 1.584 1.584 1.584H31.2c.874 0 1.584-.71 1.584-1.584V28.642c0-.42-.162-.816-.457-1.114l-3.23-3.268zm1.258 5.438v9.018H20.123v-9.018h10.232zM29.055 31h-7.632v6.416h7.632V31zM25.53 20.65h-7.837v2.31h10.12l-2.283-2.31zm-.38-3.879h-7.457v2.578h7.457v-2.578zm5.384-2.5H29.49l1.845 3.66h1.045l-1.845-3.66zm-6.539 0H18.85v1.2h5.146v-1.2zm6.29-6.29H19.118a3.907 3.907 0 00-3.903 3.902v1.086h15.068V7.981zm2.5 1.287h-1.2v2.55h1.2v-2.55z" />
  );

  const normalHover = (
    <path d="M31.733 6.68v1.288h2.5v5.152h-2.446l-.054.531v.619h-.062l-.5 4.962h-3.806l.499-4.962h-2.42v1.2H26.6v4.263l6.801 6.882c.537.543.832 1.262.832 2.027v10.572a2.887 2.887 0 01-2.883 2.885H19.426a2.888 2.888 0 01-2.884-2.885V15.47h1.157v-1.2h-3.634v-2.387a5.209 5.209 0 015.203-5.203h12.465zm-2.486 17.58H17.843v14.954c0 .874.71 1.584 1.583 1.584H31.35c.873 0 1.584-.71 1.584-1.584V28.642c0-.42-.163-.815-.458-1.113l-3.229-3.269zm1.257 5.438v9.018H20.272v-9.018h10.232zM29.204 31h-7.632v6.416h7.632V31zm-3.525-10.35h-7.836v2.309h10.118l-2.282-2.309zm-.379-3.879h-7.457v2.578H25.3v-2.578zm5.065-2.501h-1.194l-.369 3.661h1.194l.369-3.661zm-6.221 0h-5.146v1.2h5.146v-1.2zm13.309-1.608l2.019 1.384-.735 1.072-2.02-1.384.736-1.072zm-7.02-4.681H19.268a3.906 3.906 0 00-3.902 3.902v1.086h15.067V7.981zm2.501 1.288h-1.2v2.55h1.2v-2.55zm7.538.625v1.301h-2.277V9.894h2.277zm-1.735-3.923l.735 1.072-2.02 1.384-.734-1.072 2.019-1.385z" />
  );

  return isHovered ? normalHover : normal;
};

export default Spray;
