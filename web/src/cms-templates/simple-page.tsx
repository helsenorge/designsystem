import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MarkdownRemark } from 'types/graphql-types';

import { H1 } from '../components/markdown/MDXOverride/Heading';
import Preamble from '../components/markdown/MDXCustom/Preamble';
import Page from '../layouts/Page';

interface AboutPageTemplateProps {
  title?: string | null;
  preamble?: string | null;
  content?: JSX.Element | null;
}

export const SimplePageTemplate: React.FC<AboutPageTemplateProps> = ({ title, preamble, content }) => {
  return (
    <article>
      <H1>{title}</H1>
      <Preamble>{preamble}</Preamble>
      <section>{content}</section>
    </article>
  );
};

interface SimplePageProps {
  data: {
    mdx: MarkdownRemark;
  };
}

const SimplePage: React.FC<SimplePageProps> = ({ data }) => {
  const { mdx } = data;
  return (
    <Page>
      <SimplePageTemplate
        title={mdx.frontmatter?.title}
        preamble={mdx.frontmatter?.preamble}
        content={<MDXRenderer>{mdx.body ?? ''}</MDXRenderer>}
      />
    </Page>
  );
};

export default SimplePage;

export const aboutPageQuery = graphql`
  query SimplePage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        preamble
      }
    }
  }
`;
