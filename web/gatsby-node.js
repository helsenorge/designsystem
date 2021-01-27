const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMdx.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      const templateKey = edge.node.frontmatter.templateKey;
      const component = path.resolve(`src/cms-templates/${templateKey ? String(templateKey) : 'simple-page'}.tsx`);
      createPage({
        path: edge.node.fields.slug,
        component,
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
    resolve: {
      modules: [path.resolve('./node_modules'), path.resolve('../npm/designsystem/node_modules')],
      symlinks: false,
    },
  });
};

// /* eslint-disable @typescript-eslint/no-var-requires */
// // For some reason adding imports as ES6 totally broke all the node configurations.
// const path = require('path');
// const {createFilePath} = require(`gatsby-source-filesystem`);

// // const mainRoutePattern = /\/\d+-(design-system|design-language|pattern-library)\/01-index\//;

// // function isMainRoute(slug) {
// //   return mainRoutePattern.test(slug);
// // }

// // function getRouteTitle(slug) {
// //   const route = slug
// //     .split('/')[1]
// //     .split('-')
// //     .slice(1)
// //     .map((word, index) => index === 0 ? word.charAt(0).toUpperCase()+word.slice(1) : word)
// //     .join(' ');
// //   return route;
// // }

// exports.onCreateNode = ({node, getNode, actions}) => {
//   const {createNodeField, createNode} = actions;
//   createNode({
//     // Data for the node.
//     field1: `a string`,
//     field2: 10,
//     field3: true,

//     // Required fields.
//     id: `a-node-id`,
//     parent: `the-id-of-the-parent-node`, // or null if it's a source node without a parent
//     children: [],
//     internal: {
//       type: `CoolServiceMarkdownField`,
//       contentDigest: crypto
//         .createHash(`md5`)
//         .update(JSON.stringify(fieldData))
//         .digest(`hex`),
//       mediaType: `text/markdown`, // optional
//       content: JSON.stringify(fieldData), // optional
//       description: `Cool Service: "Title of entry"`, // optional
//     },
//   });
//   console.log('hererere');
//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({node, getNode, basePath: `content`});
//     console.log('heeeeeeer');
//     createNodeField({
//       node,
//       name: 'routeTitle',
//       value: getRouteTitle(slug),
//     });
//     createNodeField({
//       node,
//       name: 'compressedPath',
//       value: slug,
//     });
//     createNodeField({
//       node,
//       name: 'isMainRoute',
//       value: isMainRoute(slug),
//     });
//   }
// };

// exports.createPages = ({ graphql, actions }) => {
//   return new Promise(resolve => {
//     resolve(
//       graphql(`
//         {
//           allMdx {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   path
//                 }
//               }
//             }
//           }
//         }
//       `).then(result => {
//         // result.data.allMdx.edges.forEach(({ node }) => {
//         //   actions.createPage({
//         //     path: node.frontmatter.path,
//         //     component: path.resolve('./src/layouts/Page.tsx'),
//         //     context: { id: node.id }
//         //   });
//         // });
//       })
//     );
//   });
// };

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
