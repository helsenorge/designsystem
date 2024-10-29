import { render, screen } from '@testing-library/react';

import Loader, { Overlay } from './Loader';

describe('Gitt at en loader skal vises ', (): void => {
  describe('Når at en loader rendres ', (): void => {
    test('Så vises loaderen', (): void => {
      const { container } = render(<Loader />);
      expect(container).toMatchSnapshot();
    });

    test('Så er alle fire loaderDots riktig plassert', (): void => {
      render(<Loader testId={'loaderDotTest'} />);
      const loaderDotsWrapper = screen.getByTestId('loaderDotTest');

      // eslint-disable-next-line testing-library/no-node-access
      expect(loaderDotsWrapper.children[0].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
      // eslint-disable-next-line testing-library/no-node-access
      expect(loaderDotsWrapper.children[1].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
      // eslint-disable-next-line testing-library/no-node-access
      expect(loaderDotsWrapper.children[2].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
      // eslint-disable-next-line testing-library/no-node-access
      expect(loaderDotsWrapper.children[3].className).toBe('loader__dot loader__dot--small loader__dot--neutral');
    });
  });

  describe('Når center prop er true ', (): void => {
    test('Så sentreres loader', (): void => {
      render(<Loader center testId="load" />);
      const wrapper = screen.getByTestId('load');
      // eslint-disable-next-line testing-library/no-node-access
      expect(wrapper.parentElement).toHaveClass('loader-wrapper--center');
    });
  });

  describe('Når overlay prop er satt til screen', (): void => {
    test('Så har loaderen en overlay som dekker skjermen, og color er nå svart på loaderen og progressbar. Samt ingen styling på parent element', (): void => {
      render(
        <div data-testid="parent-wrapper">
          <Loader overlay={Overlay.screen} testId={'loaderDotTest'} />
        </div>
      );
      const loader = screen.getByRole('progressbar');
      expect(loader).toBeVisible();

      // eslint-disable-next-line testing-library/no-node-access
      expect(loader.parentElement).toHaveClass('loader-wrapper--overlay-screen');

      const loaderDotsWrapper = screen.getByTestId('loaderDotTest');
      expect(loaderDotsWrapper).toHaveAttribute('aria-labelledby', 'test');
      // eslint-disable-next-line testing-library/no-node-access
      expect(loaderDotsWrapper.children[0].className).toBe('loader__dot loader__dot--small loader__dot--white');

      const parent = screen.getByTestId('parent-wrapper');
      expect(parent).not.toHaveStyle('position: relative');
    });
  });

  describe('Når ariaLabelledById er satt', (): void => {
    test('Så settes attributten aria-labelledby til det samme', (): void => {
      render(<Loader ariaLabelledById="aria-test" overlay={Overlay.screen} testId="load" />);
      const wrapper = screen.getByTestId('load');
      // eslint-disable-next-line testing-library/no-node-access
      expect(wrapper.parentElement).toHaveClass('loader-wrapper--overlay-screen');
      expect(wrapper).toHaveAttribute('aria-labelledby', 'aria-test');
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Loader testId="bare-tester" />);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når loader skal vises med overlay på parent', (): void => {
    test('Så så endres parent postion til display og riktig klasse i loader', (): void => {
      render(
        <div data-testid="parent-wrapper">
          <Loader testId="bare-tester" overlay={Overlay.parent} />
        </div>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();

      const loaderWrapper = screen.getByRole('progressbar');
      // eslint-disable-next-line testing-library/no-node-access
      expect(loaderWrapper.parentElement).toHaveClass('loader-wrapper--overlay-parent');

      const wrapper = screen.getByTestId('parent-wrapper');
      expect(wrapper).toHaveStyle('position: relative');
    });
  });

  describe('Når loader skal vises inline med span', (): void => {
    test('Så rendres komponenten med riktig klasse', (): void => {
      render(
        <div data-testid="parent-wrapper">
          <span>{'Morn'}</span>
          <Loader testId="bare-tester" inline />
        </div>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();

      const loaderWrapper = screen.getByRole('progressbar');
      // eslint-disable-next-line testing-library/no-node-access
      expect(loaderWrapper.parentElement).toHaveClass('loader-wrapper--inline');

      const wrapper = screen.getByTestId('parent-wrapper');
      expect(wrapper).toHaveStyle('display: flex');
    });
  });

  describe('Når loader skal vises med custom labelId', (): void => {
    test('Så har label id-en', (): void => {
      render(<Loader ariaLabel="Laster inn" labelId="testing" />);

      const label = screen.getByText('Laster inn');
      expect(label).toHaveAttribute('id', 'testing');
    });
  });
});
