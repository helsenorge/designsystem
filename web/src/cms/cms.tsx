import React from 'react';
import CMS from 'netlify-cms-app';
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx';

import { UIComponents } from '../components/markdown/MDXCustom';
import MDXOverride from '../components/markdown/MDXOverride';

import SimplePagePreview from './preview-templates/simple-page-preview';
import AboutPagePreview from './preview-templates/about-page-preview';
import MenuPreview from './preview-templates/menu-preview';

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

CMS.registerPreviewTemplate('merkevare', SimplePagePreview);
CMS.registerPreviewTemplate('editorial', SimplePagePreview);
CMS.registerPreviewTemplate('profile-material', SimplePagePreview);
CMS.registerPreviewTemplate('patterns', SimplePagePreview);
CMS.registerPreviewTemplate('routes', MenuPreview);

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('contribute', SimplePagePreview);
CMS.registerPreviewTemplate('principles', SimplePagePreview);
CMS.registerPreviewTemplate('privacy', SimplePagePreview);
CMS.registerPreviewTemplate('roadmap', SimplePagePreview);
CMS.registerPreviewTemplate('terms-of-use', SimplePagePreview);

// Custom image widget, gir redaktørene muligheten til å få ulike stylinger i et riktekst felt
CMS.registerEditorComponent({
  id: 'image-custom',
  label: 'Image Custom',
  fields: [
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Alt Text',
      name: 'alt',
      widget: 'string',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'select',
      options: ['image-auto'],
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^image-custom (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      image: match[2],
      alt: match[1],
      title: match[4],
      type: match[5],
    };
  },
  // Function to create an img block from an instance of this component
  toBlock: function(obj) {
    return `<img class="${obj.type}" src="${obj.image}" title="${obj.title}" alt="${obj.alt}" />`;
  },
  // Preview output for this component
  toPreview: function(obj) {
    return `<img class="${obj.type}" src="${obj.image}" title="${obj.title}" alt="${obj.alt}" />`;
  },
});
