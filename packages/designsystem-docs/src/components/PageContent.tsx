import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import styled from 'styled-components';
import MDXOverride from './markdown/MDXOverride';
import {Link} from 'react-scroll';

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

function PageContent({className, children}: PageContentProps) {
  return (
    <div className={className}>
      <MDXProvider components={overridedMDXComponents}>{children}</MDXProvider>
    </div>
  );
}

const StyledPageContent = styled(PageContent)`
  max-width: 750px;
  padding: 0 58px;
`;

export {StyledPageContent as PageContent};
