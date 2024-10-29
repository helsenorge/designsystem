import { render, screen } from '@testing-library/react';

import Duolist, { DuolistGroup } from './Duolist';
import AnchorLink from '../AnchorLink';
import Title from '../Title';

describe('Gitt at Duolist skal vises', (): void => {
  describe('Når Duolist skal vises vanlig', (): void => {
    test('Så rendres den som den skal', (): void => {
      const { container } = render(
        <Duolist testId={'test01'}>
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
          <DuolistGroup term={'test term 2'} description={'test description 2'} />
        </Duolist>
      );

      const duoListWrapper = screen.getByTestId('test01');

      const dlGroupTerm1 = screen.getByText('test term 1');
      const dlGroupTerm2 = screen.getByText('test term 2');
      const dlGroupDescription1 = screen.getByText('test description 1');
      const dlGroupDescription2 = screen.getByText('test description 2');

      expect(duoListWrapper).toBeInTheDocument();
      expect(dlGroupTerm1).toBeInTheDocument();
      expect(dlGroupTerm2).toBeInTheDocument();
      expect(dlGroupDescription1).toBeInTheDocument();
      expect(dlGroupDescription2).toBeInTheDocument();

      expect(dlGroupTerm1).toHaveClass('duolist__dt duolist__dt--bold');
      expect(dlGroupDescription1.className).toBe('duolist__dd');

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når Duolist vises med DuolistVariants line', (): void => {
    test('Så rendres den med line class på duoList', (): void => {
      render(
        <Duolist testId={'test01'} variant={'line'}>
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
          <DuolistGroup term={'test term 2'} description={'test description 2'} />
        </Duolist>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const duoList = screen.getByTestId('test01').children[0];

      expect(duoList).toHaveClass('duolist--line');
    });
  });

  describe('Når Duolist vises med border', (): void => {
    test('Så rendres den med border class på duoList', (): void => {
      render(
        <Duolist testId={'test01'} border="border">
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
          <DuolistGroup term={'test term 2'} description={'test description 2'} />
        </Duolist>
      );

      const duoList = screen.getByTestId('test01');

      expect(duoList).toHaveClass('duolist-wrapper--border');
    });
  });

  describe('Når Duolist vises med label', (): void => {
    test('Så rendres den som den skal', (): void => {
      const label = (
        <Title appearance="title3" htmlMarkup="h3">
          {'Test label'}
        </Title>
      );

      render(
        <Duolist label={label}>
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
          <DuolistGroup term={'test term 2'} description={'test description 2'} />
        </Duolist>
      );

      const labelElement = screen.getByText('Test label');

      expect(labelElement).toBeInTheDocument();
    });
  });

  describe('Når Duolist vises med boldColumn satt som second', (): void => {
    test('Så rendres den med bold class på andre column', (): void => {
      render(
        <Duolist boldColumn="second">
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
          <DuolistGroup term={'test term 2'} description={'test description 2'} />
          <DuolistGroup boldColumn={'first'} term={'test term 3'} description={'test description 3'} />
        </Duolist>
      );

      const duoListTerm1 = screen.getByText('test term 1');
      const duoListDescription1 = screen.getByText('test description 1');
      const duoListTerm2 = screen.getByText('test term 2');
      const duoListDescription2 = screen.getByText('test description 2');
      const duoListTerm3 = screen.getByText('test term 3');
      const duoListDescription3 = screen.getByText('test description 3');

      expect(duoListTerm1.className).toBe('duolist__dt');
      expect(duoListDescription1).toHaveClass('duolist__dd duolist__dd--bold');
      expect(duoListTerm2.className).toBe('duolist__dt');
      expect(duoListDescription2).toHaveClass('duolist__dd duolist__dd--bold');
      expect(duoListTerm3.className).toBe('duolist__dt duolist__dt--bold');
      expect(duoListDescription3).toHaveClass('duolist__dd');
    });
  });

  describe('Når Duolist vises med anchorlink', (): void => {
    test('Så rendres det riktig', (): void => {
      render(
        <Duolist testId={'test01'} border="border">
          <DuolistGroup
            term={'test term 1'}
            description={
              <>
                {'test description 1 + '} <AnchorLink>{'test link 1'}</AnchorLink>
              </>
            }
          />
          <DuolistGroup term={'test term 2'} description={'test description 2'} />
        </Duolist>
      );

      const link = screen.getByText('test link 1');

      expect(link).toBeInTheDocument();
      expect(link).toHaveClass('anchorlink');
    });
  });
  describe('Når Duolist child er null', (): void => {
    test('Så kastes det ikke en feilmelding', (): void => {
      render(
        <Duolist testId={'test01'} border="border">
          {false && <DuolistGroup term={'test term 1'} description={'test description 1'} />}
        </Duolist>
      );
    });
  });
  describe('Når Duolist format er satt til non-formatted', (): void => {
    test('Så rendrer den riktig', (): void => {
      render(
        <Duolist testId={'test01'} format={'non-formatted'}>
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
        </Duolist>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const duoList = screen.getByTestId('test01').children[0];
      const dt = screen.getByText('test term 1');
      const dd = screen.getByText('test description 1');
      const separator = dt.getAttribute('data-separator');

      expect(duoList.className).toBe('duolist duolist--non-formatted');
      expect(dt.className).toBe('duolist__dt duolist__dt--non-formatted');
      expect(dd.className).toBe('duolist__dd duolist__dd--non-formatted');
      expect(separator).toBe(': ');
    });
  });

  describe('Når Duolist separator er satt med format non-formatted', (): void => {
    test('Så settes den ønskede separatoren', (): void => {
      render(
        <Duolist testId={'test01'} format={'non-formatted'} separator=" - ">
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
        </Duolist>
      );

      const dt = screen.getByText('test term 1');
      const separator = dt.getAttribute('data-separator');

      expect(separator).toBe(' - ');
    });
  });

  describe('Når Duolist separator er satt med format formatted', (): void => {
    test('Så settes det ikke en separator', (): void => {
      render(
        <Duolist testId={'test01'} separator=" - ">
          <DuolistGroup term={'test term 1'} description={'test description 1'} />
        </Duolist>
      );

      const dt = screen.getByText('test term 1');
      const separator = dt.getAttribute('data-separator');

      expect(separator).toBe(null);
    });
  });
});
