import React from 'react';
import { render, screen } from '@testing-library/react';
import Duolist, { DuolistGroup } from './Duolist';
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
      const duoList = duoListWrapper.children[0];

      const dlGroupTerm1 = screen.getByText('test term 1');
      const dlGroupTerm2 = screen.getByText('test term 2');
      const dlGroupDescription1 = screen.getByText('test description 1');
      const dlGroupDescription2 = screen.getByText('test description 2');

      expect(duoListWrapper).toBeInTheDocument();
      expect(duoList).toBeInTheDocument();
      expect(dlGroupTerm1).toBeInTheDocument();
      expect(dlGroupTerm2).toBeInTheDocument();
      expect(dlGroupDescription1).toBeInTheDocument();
      expect(dlGroupDescription2).toBeInTheDocument();

      expect(duoListWrapper).toHaveClass('duolist-wrapper');
      expect(duoList).toHaveClass('duolist');
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
        </Duolist>
      );

      const duoListTerm = screen.getByText('test term 1');
      const duoListDescription = screen.getByText('test description 1');

      expect(duoListTerm.className).toBe('duolist__dt');
      expect(duoListDescription).toHaveClass('duolist__dd duolist__dd--bold');
    });
  });
});
