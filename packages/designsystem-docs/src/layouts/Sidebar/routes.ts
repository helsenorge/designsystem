const libraryRoutes = [
  {
    label: 'Get started',
    path: '/library',
    children: [],
  },
  {
    label: 'Grid',
    path: '/library/grid',
    children: [],
  },
  {
    label: 'Icons',
    path: '/library/icons',
    children: [],
  },
  {
    label: 'Components',
    path: '/library/components',
    children: [
      {
        label: 'Badge',
        path: '/library/components/badge',
      },
      {
        label: 'Button',
        path: '/library/components/button',
      },
      {
        label: 'Icon',
        path: '/library/components/icon',
      },
      {
        label: 'List',
        path: '/library/components/list',
      },
      {
        label: 'Loader',
        path: '/library/components/loader',
      },
      {
        label: 'Logo',
        path: '/library/components/logo',
      },
      {
        label: 'Title',
        path: '/library/components/title',
      },
    ],
  },
];

const brandRoutes = [
  {
    label: 'Introduction',
    path: '/brand',
    children: [],
  },
  {
    label: 'Animation',
    path: '/brand/animation',
    children: [],
  },
  {
    label: 'Icons',
    path: '/brand/icons',
    children: [],
  },
  {
    label: 'Illustrations',
    path: '/brand/illustrations',
    children: [],
  },
  {
    label: 'Logo',
    path: '/brand/logo',
    children: [],
  },
  {
    label: 'Palette',
    path: '/brand/palette',
    children: [],
  },
  {
    label: 'Photography',
    path: '/brand/photography',
    children: [],
  },
  {
    label: 'Spacing',
    path: '/brand/spacing',
    children: [],
  },
  {
    label: 'Strategy',
    path: '/brand/strategy',
    children: [],
  },
  {
    label: 'Tone of Voice',
    path: '/brand/tone-of-voice',
    children: [],
  },
  {
    label: 'Typography',
    path: '/brand/typography',
    children: [],
  },
];

const patternRoutes = [
  {
    label: 'Introduction',
    path: '/patterns',
    children: [],
  },
  {
    label: 'Lightbox',
    path: '/patterns/lightbox',
    children: [],
  },
  {
    label: 'Page feedback',
    path: '/patterns/page-feedback',
    children: [],
  },
];

const editorialRoutes = [
  {
    label: 'Editorial',
    path: '/editorial',
    children: [],
  },
];

const marektingMaterialRoutes = [
  {
    label: 'Marekting material',
    path: '/marketing-material',
    children: [],
  },
];

export const routes = {
  library: libraryRoutes,
  brand: brandRoutes,
  patterns: patternRoutes,
  editorial: editorialRoutes,
  'marketing-material': marektingMaterialRoutes,
};
