import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MarkdownRemark} from 'types/graphql-types';

import Preamble from '../components/markdown/MDXCustom/Preamble';
import Page from '../layouts/Page';

interface AboutPageTemplateProps {
  title?: string | null;
  preamble?: string | null;
  pdf?: string | null;
  content?: JSX.Element;
}

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({title, content, preamble, pdf}) => {
  return (
    <section>
      <h1>{title}</h1>
      <Preamble>{preamble}</Preamble>
      {pdf && (
        <p>
          Fil: <a href={pdf}>{pdf}</a>
        </p>
      )}
      {content}
    </section>
  );
};

interface AboutPageProps {
  data: {
    mdx: MarkdownRemark;
  };
}

const AboutPage: React.FC<AboutPageProps> = ({data}) => {
  const {mdx: post} = data;

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
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        preamble
        pdf
      }
    }
  }
`;
