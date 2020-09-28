import React from 'react';
import CMS from 'netlify-cms-app';
import {MdxControl, MdxPreview} from 'netlify-cms-widget-mdx';

import {UIComponents} from '../components/markdown/MDXCustom';
import MDXOverride from '../components/markdown/MDXOverride';

import SimplePagePreview from './preview-templates/simple-page-preview';
import AboutPagePreview from './preview-templates/about-page-preview';

// Registrer evt file-system for lokal utvikling
// import {FileSystemBackend} from 'netlify-cms-backend-fs';
// CMS.registerBackend('file-system', FileSystemBackend);

const PreviewWindow = (props: React.Props<{}>) => {
  const mdxProps = {
    // This key represents html elements used in markdown; h1, p, etc
    components: MDXOverride,
    // Pass components used in the editor (and shared throughout mdx) here:
    scope: UIComponents,
    mdPlugins: [],
  };

  return <MdxPreview mdx={mdxProps} {...props} />;
};

CMS.registerWidget('mdx', MdxControl, PreviewWindow);

CMS.registerPreviewTemplate('brand', SimplePagePreview);
CMS.registerPreviewTemplate('editorial', SimplePagePreview);
CMS.registerPreviewTemplate('marketing-material', SimplePagePreview);
CMS.registerPreviewTemplate('patterns', SimplePagePreview);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('contribute', SimplePagePreview);
CMS.registerPreviewTemplate('principles', SimplePagePreview);
CMS.registerPreviewTemplate('privacy', SimplePagePreview);
CMS.registerPreviewTemplate('roadmap', SimplePagePreview);
CMS.registerPreviewTemplate('terms-of-use', SimplePagePreview);
