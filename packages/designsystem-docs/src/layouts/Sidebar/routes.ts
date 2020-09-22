const libraryRoutes = [
  {
    label: 'Get started',
    path: '/library',
    children: [],
  },
  {
    label: 'Reset',
    path: '/library/reset',
    children: [],
  },
  {
    label: 'SCSS resources',
    path: '/library/scss',
    children: [
      {
        label: 'Grid and breakpoints',
        path: '/library/scss/grid',
      },
      {
        label: 'Spacing',
        path: '/library/scss/spacing',
      },
      {
        label: 'Typography',
        path: '/library/scss/typography',
      },
      {
        label: 'Palette',
        path: '/library/scss/palette',
      },
    ],
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
        label: 'AnchorLink',
        path: '/library/components/anchor-link',
      },
      {
        label: 'Avatar',
        path: '/library/components/avatar',
      },
      {
        label: 'Badge',
        path: '/library/components/badge',
      },
      {
        label: 'Button',
        path: '/library/components/button',
      },
      {
        label: 'ExpanderList',
        path: '/library/components/expander-list',
      },
      {
        label: 'Icon',
        path: '/library/components/icon',
      },
      {
        label: 'LinkList',
        path: '/library/components/link-list',
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
        label: 'NotificationPanel',
        path: '/library/components/notification-panel',
      },
      {
        label: 'Spacer',
        path: '/library/components/spacer',
      },
      {
        label: 'Tile',
        path: '/library/components/tile',
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
