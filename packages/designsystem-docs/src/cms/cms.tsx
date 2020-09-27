import React from 'react';
import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/about-page-preview';
import {MdxControl, MdxPreview} from 'netlify-cms-widget-mdx';

import {StyleSheetManager} from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {theme as hndsTheme} from '@helsenorge/designsystem-react';

import {UIComponents} from '../components/markdown/MDXCustom';
import SimplePagePreview from './preview-templates/simple-page-preview';

// Registrer evt file-system for lokal utvikling
// import {FileSystemBackend} from 'netlify-cms-backend-fs';
// CMS.registerBackend('file-system', FileSystemBackend);

const PreviewWindow = (props: React.Props<{}>) => {
  const iframe = document.getElementsByTagName('iframe')[0];
  const iframeHeadElem = iframe?.contentDocument?.head;

  const mdxProps = {
    // This key represents html elements used in markdown; h1, p, etc
    //components: LayoutComponents,
    // Pass components used in the editor (and shared throughout mdx) here:
    scope: UIComponents,
    mdPlugins: [],
  };

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <ThemeProvider theme={hndsTheme}>
        <MdxPreview mdx={mdxProps} {...props} />
      </ThemeProvider>
    </StyleSheetManager>
  );
};

CMS.registerWidget('mdx', MdxControl, PreviewWindow);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('brand', SimplePagePreview);
CMS.registerPreviewTemplate('editorial', SimplePagePreview);
CMS.registerPreviewTemplate('marketing-material', SimplePagePreview);
CMS.registerPreviewTemplate('patterns', SimplePagePreview);
