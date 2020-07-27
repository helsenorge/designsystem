import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import styled from 'styled-components';
import {theme as hndsTheme} from '@helsenorge/designsystem-react';
import MDXOverride from './markdown/MDXOverride';

const overridedMDXComponents = {
  h1: MDXOverride.H1,
  h2: MDXOverride.H2,
  h3: MDXOverride.H3,
  h4: MDXOverride.H4,
  img: MDXOverride.Image,
  table: MDXOverride.Table,
  tr: MDXOverride.TableRow,
  th: MDXOverride.TableHeader,
  td: MDXOverride.TableCell,
};

interface PageContentProps {
  className?: string;
  children: React.ReactNode;
}

function PageContent({className, children}: PageContentProps): JSX.Element {
  return (
    <div className={className}>
      <MDXProvider components={overridedMDXComponents}>{children}</MDXProvider>
    </div>
  );
}

const StyledPageContent = styled(PageContent)`
  width: 100%;
  padding: 0 ${hndsTheme.spacer}rem;
  @media ${hndsTheme.screen.sm} {
    padding: 0 ${hndsTheme.spacers[8]}rem;
  }
`;

export {StyledPageContent as PageContent};
