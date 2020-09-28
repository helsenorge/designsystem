import React from 'react';

import {StyleSheetManager} from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {theme as hndsTheme} from '@helsenorge/designsystem-react';

const PreviewWrapper = ({children}: React.Props<{}>): JSX.Element => {
  const iframe = document.getElementsByTagName('iframe')[0];
  const iframeHeadElem = iframe?.contentDocument?.head;
  return (
    <StyleSheetManager target={iframeHeadElem}>
      <ThemeProvider theme={hndsTheme}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
};

export default PreviewWrapper;
