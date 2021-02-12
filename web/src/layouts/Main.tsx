import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { PageContent } from '../components/PageContent';

interface MainProps {
  children?: React.ReactNode;
  className?: string;
}

const query = graphql`
  query {
    allMdx {
      nodes {
        tableOfContents
        frontmatter {
          path
        }
      }
    }
  }
`;

function Main(props: MainProps): JSX.Element {
  const data = useStaticQuery(query);
  // const [tableOfContents, anchorIds] = useTableOfContents(data);
  return (
    <Element name="mdx-content" id="mdx-content" className={props.className}>
      <PageContent>{props.children}</PageContent>
      {/* <ToC tableOfContents={tableOfContents} /> */}
    </Element>
  );
}

const StyledMain = styled(Main)`
  display: flex;
  flex: 1 1 auto;
  max-width: 100%;
  min-width: 0;
  min-height: calc(100vh - 27rem);
  height: 100%;
  background-color: white;
`;

export { StyledMain as Main };
