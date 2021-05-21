import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { theme as hndsTheme } from '@helsenorge/designsystem-react';
import MDXOverride from './markdown/MDXOverride';
import { UIComponents } from './markdown/MDXCustom';

const overridedMDXComponents = {
  ...MDXOverride,
  ...UIComponents,
};

interface PageContentProps {
  className?: string;
  children: React.ReactNode;
}

function PageContent({ className, children }: PageContentProps): JSX.Element {
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
    padding: 0 ${hndsTheme.spacers[8]}rem ${hndsTheme.spacers[7]}rem;
  }
`;

export { StyledPageContent as PageContent };
