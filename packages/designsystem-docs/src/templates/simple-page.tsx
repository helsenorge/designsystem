import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import {MarkdownRemark} from 'types/graphql-types';

import Page from '../layouts/Page';

interface AboutPageTemplateProps {
  title?: string | null;
  preamble?: string | null;
  content?: JSX.Element;
}

export const SimplePageTemplate: React.FC<AboutPageTemplateProps> = ({content}) => {
  return <section>{content}</section>;
};

interface SimplePageProps {
  data: {
    mdx: MarkdownRemark;
  };
}

const SimplePage: React.FC<SimplePageProps> = ({data}) => {
  const {mdx: post} = data;
  return (
    <Page>
      <SimplePageTemplate title={post.frontmatter?.title} content={<MDXRenderer>{post.body ?? ''}</MDXRenderer>} />
    </Page>
  );
};

export default SimplePage;

export const aboutPageQuery = graphql`
  query SimplePage($id: String!) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
      }
    }
  }
`;
