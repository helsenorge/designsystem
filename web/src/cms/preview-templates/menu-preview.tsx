import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

import Spacer from '@helsenorge/designsystem-react/components/Spacer';
import { theme as hndsTheme } from '@helsenorge/designsystem-react';

import PreviewWrapper from '../preview-wrapper';
import { SubMenu } from '@layouts/Sidebar/Sidebar';
import Section from '@layouts/Section';

import Preamble from '../../components/markdown/MDXCustom/Preamble';
import { H1, H2 } from '../../components/markdown/MDXOverride/Heading';

const MenuPreview = ({ entry }: PreviewTemplateComponentProps): JSX.Element => {
  const menu = entry.get('data').toJS();

  return (
    <PreviewWrapper>
      <Section color={hndsTheme.palette.blueberry100}>
        <Spacer size={'s'} />
        <H1>Meny</H1>
        <Preamble>Her vises forhåndvisning av menyene for hver hovedside. Scroll ned for å se alle undermenyene.</Preamble>
        {Object.entries(menu).map(menuItem => {
          const menuName = menuItem[0];
          const subMenu = menuItem[1];

          return (
            <>
              <H2>{'Meny for ' + menuName}</H2>
              <SubMenu routeMap={subMenu as never[]} activeRoute={'/'}></SubMenu>
            </>
          );
        })}
      </Section>
    </PreviewWrapper>
  );
};

export default MenuPreview;
