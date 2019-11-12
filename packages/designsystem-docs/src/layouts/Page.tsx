import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Content } from './Content';
import { Sidebar } from './Sidebar';
import { Main } from './Main';

interface FrontpageProps {
  children?: React.ReactNode;
  className?: string;
}

function StyledPage(props: FrontpageProps): JSX.Element {
  return (
    <div className={props.className}>
      <Header />
      <Content>
        <Sidebar />
        <Main>
          {props.children}
        </Main>
      </Content>
    </div>
  )
}

const Page = styled(StyledPage)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default Page;