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
  pdf?: string | null;
  content?: JSX.Element | null;
}

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({ title, content, preamble, pdf }) => {
  return (
    <article>
      <H1>{title}</H1>
      <Preamble>{preamble}</Preamble>
      {pdf && (
        <p>
          Fil: <a href={pdf}>{pdf}</a>
        </p>
      )}
      <section>{content}</section>
    </article>
  );
};

interface AboutPageProps {
  data: {
    mdx: MarkdownRemark;
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { mdx: post } = data;

  return (
    <Page>
      <AboutPageTemplate
        title={post.frontmatter?.title}
        preamble={post.frontmatter?.preamble}
        pdf={post.frontmatter?.pdf}
        content={<MDXRenderer>{post.body ?? ''}</MDXRenderer>}
      />
    </Page>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        preamble
        pdf
      }
    }
  }
`;
