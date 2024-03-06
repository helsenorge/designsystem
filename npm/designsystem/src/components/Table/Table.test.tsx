import React, { useState } from 'react';

import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi as jest } from 'vitest';

import * as BreakpointUtils from '../../hooks/useBreakpoint';
import * as DeviceUtils from '../../utils/device';

import {
  ResponsiveTableVariant,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableCell,
  TableRow,
  HeaderCategory,
  SortDirection,
  TableExpanderCell,
  TableExpandedRow,
  ModeType,
} from './';

const mockUseBreakpoint = jest.fn();
jest.spyOn(BreakpointUtils, 'useBreakpoint').mockImplementation(mockUseBreakpoint);

const mockGetBoundingClientRect = jest.fn();
window.HTMLElement.prototype.getBoundingClientRect = mockGetBoundingClientRect;

const mockIsTouchDevice = jest.fn();
jest.spyOn(DeviceUtils, 'isTouchDevice').mockImplementation(mockIsTouchDevice);

const TableContents: React.FC = () => (
  <>
    <TableHead category={HeaderCategory.normal}>
      <TableRow>
        <TableHeadCell>{'Navn'}</TableHeadCell>
        <TableHeadCell>{'Beskrivelse'}</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell testId={'table-cell'} dataLabel="Navn">
          {'Hans Nilsen'}
        </TableCell>
        <TableCell dataLabel="Beskrivelse">{'En ganske lang beskrivelse...'}</TableCell>
      </TableRow>
    </TableBody>
  </>
);

describe('Gitt at Table skal vises', (): void => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetBoundingClientRect.mockReturnValue({ width: 0 });
  });
  describe('Når den skal vises', (): void => {
    it('Så vises en tabell', (): void => {
      const { container } = render(
        <Table
          breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'sm' }}
          testId="test01"
          scrollAriaLabel="Fastleger"
        >
          <TableContents />
        </Table>
      );

      const table = screen.getByTestId('test01');
      const child = screen.getByText('Hans Nilsen');

      expect(table).toHaveClass('table');
      expect(child).toHaveClass('table__cell');

      expect(container).toMatchSnapshot();

      const horizontallScroll = screen.queryByTestId('horizontal-scroll');
      expect(horizontallScroll).not.toBeInTheDocument();
    });
  });
});

describe('Når den skal vises med horizontalscroll-visning på md skjerm', (): void => {
  describe('Når touch er støttet', (): void => {
    describe('Når breakpoint er md', (): void => {
      it('Så vises en tabell med responsiv visning', (): void => {
        mockIsTouchDevice.mockReturnValue(true);
        mockUseBreakpoint.mockReturnValue(768);
        const { container } = render(
          <Table
            breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}
            testId="test-table"
            scrollAriaLabel="Fastleger"
          >
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table');

        const horizontallScroll = screen.getByLabelText('Fastleger');
        expect(horizontallScroll).toBeInTheDocument();
      });

      it('Så kan horizontalscroll tabbes til', async (): Promise<void> => {
        mockUseBreakpoint.mockReturnValue(768);
        render(
          <Table
            breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}
            testId="test-table"
            scrollAriaLabel="Fastleger"
          >
            <TableContents />
          </Table>
        );

        await userEvent.tab();

        const horizontallScroll = screen.getByLabelText('Fastleger');
        expect(horizontallScroll).toHaveFocus();
      });
    });
    describe('Når breakpoint er lg', (): void => {
      it('Så vises en tabell uten responsiv visning', (): void => {
        mockIsTouchDevice.mockReturnValue(true);
        mockUseBreakpoint.mockReturnValue(769);
        const { container } = render(
          <Table
            breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}
            testId="test-table"
            scrollAriaLabel="Fastleger"
          >
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table');

        const horizontallScroll = screen.queryByTestId('horizontal-scroll');
        expect(horizontallScroll).not.toBeInTheDocument();
      });
    });
  });
  describe('Når touch ikke er støttet', (): void => {
    describe('Når ingen fallback er definert', (): void => {
      it('Så vises en tabell uten responsiv visning', (): void => {
        mockIsTouchDevice.mockReturnValue(false);
        mockUseBreakpoint.mockReturnValue(768);
        const { container } = render(
          <Table
            breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}
            testId="test-table"
            scrollAriaLabel="Fastleger"
          >
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table');

        const horizontallScroll = screen.queryByTestId('horizontal-scroll');
        expect(horizontallScroll).not.toBeInTheDocument();
      });
    });
    describe('Når fallback er block', (): void => {
      it('Så vises en tabell med responsiv visning', (): void => {
        mockIsTouchDevice.mockReturnValue(false);
        mockUseBreakpoint.mockReturnValue(768);
        const { container } = render(
          <Table
            breakpointConfig={{
              variant: ResponsiveTableVariant.horizontalscroll,
              breakpoint: 'md',
              fallbackVariant: ResponsiveTableVariant.block,
            }}
            testId="test-table"
            scrollAriaLabel="Fastleger"
          >
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table table--block-md');

        const horizontallScroll = screen.queryByTestId('horizontal-scroll');
        expect(horizontallScroll).not.toBeInTheDocument();
      });
    });
    describe('Når fallback er centeredoverflow', (): void => {
      describe('Når tabell er bredere enn skjermen', (): void => {
        it('Så vises en tabell uten responsiv visning', (): void => {
          mockIsTouchDevice.mockReturnValue(false);
          const originalInnerWidth = window.innerWidth;
          window.innerWidth = 564;
          mockUseBreakpoint.mockReturnValue(564);
          mockGetBoundingClientRect.mockReturnValue({ width: 1025 });
          const { container } = render(
            <Table
              breakpointConfig={{
                variant: ResponsiveTableVariant.horizontalscroll,
                breakpoint: 'md',
                fallbackVariant: ResponsiveTableVariant.centeredoverflow,
              }}
              testId="test-table"
              scrollAriaLabel="Fastleger"
            >
              <TableContents />
            </Table>
          );

          expect(container).toMatchSnapshot();

          const table = screen.getByTestId('test-table');
          expect(table.className).toBe('table');

          const horizontallScroll = screen.queryByTestId('horizontal-scroll');
          expect(horizontallScroll).not.toBeInTheDocument();

          window.innerWidth = originalInnerWidth;
        });
      });
    });
  });
});

describe('Når den skal vises med centeredoverflow-visning på lg skjerm', (): void => {
  describe('Når breakpoint er lg', (): void => {
    describe('Når tabell er smalere enn skjermen', (): void => {
      it('Så vises en tabell med responsiv visning', (): void => {
        const originalInnerWidth = window.innerWidth;
        window.innerWidth = 1024;
        mockUseBreakpoint.mockReturnValue(1024);
        mockGetBoundingClientRect.mockReturnValue({ width: 1024 });
        const { container } = render(
          <Table breakpointConfig={{ variant: ResponsiveTableVariant.centeredoverflow, breakpoint: 'lg' }} testId="test-table">
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table table--centeredoverflow-lg');

        window.innerWidth = originalInnerWidth;
      });
    });
  });
  describe('Når tabell er bredere enn skjermen', (): void => {
    describe('Når ingen fallback er definert', (): void => {
      it('Så vises en tabell uten responsiv visning', (): void => {
        const originalInnerWidth = window.innerWidth;
        window.innerWidth = 564;
        mockUseBreakpoint.mockReturnValue(564);
        mockGetBoundingClientRect.mockReturnValue({ width: 1025 });

        const { container } = render(
          <Table breakpointConfig={{ variant: ResponsiveTableVariant.centeredoverflow, breakpoint: 'lg' }} testId="test-table">
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table');

        window.innerWidth = originalInnerWidth;
      });
    });
    describe('Når fallback er block', (): void => {
      it('Så vises en tabell med responsiv visning', (): void => {
        const originalInnerWidth = window.innerWidth;
        window.innerWidth = 564;
        mockUseBreakpoint.mockReturnValue(564);
        mockGetBoundingClientRect.mockReturnValue({ width: 1025 });

        const { container } = render(
          <Table
            breakpointConfig={{
              variant: ResponsiveTableVariant.centeredoverflow,
              breakpoint: 'lg',
              fallbackVariant: ResponsiveTableVariant.block,
            }}
            testId="test-table"
          >
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table table--block-lg');

        window.innerWidth = originalInnerWidth;
      });
    });
  });
  describe('Når fallback er horizontalscroll', (): void => {
    describe('Når touch ikke er støttet', (): void => {
      it('Så vises en tabell uten responsiv visning', (): void => {
        mockIsTouchDevice.mockReturnValue(false);
        const originalInnerWidth = window.innerWidth;
        window.innerWidth = 564;
        mockUseBreakpoint.mockReturnValue(564);
        mockGetBoundingClientRect.mockReturnValue({ width: 1025 });

        const { container } = render(
          <Table
            breakpointConfig={{
              variant: ResponsiveTableVariant.centeredoverflow,
              breakpoint: 'lg',
              fallbackVariant: ResponsiveTableVariant.horizontalscroll,
            }}
            testId="test-table"
            scrollAriaLabel="Fastleger"
          >
            <TableContents />
          </Table>
        );

        expect(container).toMatchSnapshot();

        const table = screen.getByTestId('test-table');
        expect(table.className).toBe('table');

        window.innerWidth = originalInnerWidth;
      });
    });
  });
});

describe('Når den skal vises med blokk-visning på md skjerm', (): void => {
  describe('Når breakpoint er md', (): void => {
    it('Så vises en tabell', (): void => {
      mockUseBreakpoint.mockReturnValue(768);
      const { container } = render(
        <Table breakpointConfig={{ variant: ResponsiveTableVariant.block, breakpoint: 'md' }} testId="test-table">
          <TableContents />
        </Table>
      );

      expect(container).toMatchSnapshot();

      const table = screen.getByTestId('test-table');
      expect(table.className).toBe('table table--block-md');

      const horizontallScroll = screen.queryByTestId('horizontal-scroll');
      expect(horizontallScroll).not.toBeInTheDocument();
    });
  });
  describe('Når breakpoint er lg', (): void => {
    it('Så vises en tabell uten responsiv visning', (): void => {
      mockUseBreakpoint.mockReturnValue(769);
      const { container } = render(
        <Table breakpointConfig={{ variant: ResponsiveTableVariant.block, breakpoint: 'md' }} testId="test-table">
          <TableContents />
        </Table>
      );

      expect(container).toMatchSnapshot();

      const table = screen.getByTestId('test-table');
      expect(table.className).toBe('table');

      const horizontallScroll = screen.queryByTestId('horizontal-scroll');
      expect(horizontallScroll).not.toBeInTheDocument();
    });
  });
});
describe('Gitt at table skal vises i compact-modus', (): void => {
  describe('når table render med children og compact er gitt til table', (): void => {
    it('Så vises den i compact-modus', (): void => {
      render(
        <Table mode={ModeType.compact}>
          <TableHead category={HeaderCategory.normal}>
            <TableRow>
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Beskrivelse'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell testId={'table-cell'} dataLabel="Navn">
                {'Hans Nilsen'}
              </TableCell>
              <TableCell dataLabel="Beskrivelse">{'En ganske lang beskrivelse...'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const table = screen.getByTestId('table-cell');
      expect(table.className).toBe('table__cell table__cell--compact');
    });
  });
});
describe('Gitt at table-cell rendres', (): void => {
  describe('når compact satt', (): void => {
    it('Så vises den i compact-modus', (): void => {
      render(
        <TableCell mode={ModeType.compact} testId={'table-cell'} dataLabel="Navn">
          {'Hans Nilsen'}
        </TableCell>
      );

      const table = screen.getByTestId('table-cell');
      expect(table.className).toBe('table__cell table__cell--compact');
    });
  });
});
describe('Gitt at Table kan sorteres', (): void => {
  describe('Når klikker for å sortere', (): void => {
    it('Så har tabellheader og knapper for å sortere riktige aria-egenskaper', async (): Promise<void> => {
      const SortableTable: React.FC = () => {
        const [sortDirection, setSortDirection] = useState(SortDirection.asc);
        const [sortColumn, setSortColumn] = useState('');

        const clickSort = (column: string) => {
          if (column == sortColumn) {
            setSortDirection(sortDirection === SortDirection.asc ? SortDirection.desc : SortDirection.asc);
          } else {
            setSortColumn(column);
            setSortDirection(SortDirection.asc);
          }
        };

        return (
          <Table>
            <TableHead category={HeaderCategory.sortable}>
              <TableRow>
                <TableHeadCell
                  sortable
                  sortDir={sortColumn === 'Fastlegekontor' ? sortDirection : undefined}
                  onClick={() => clickSort('Fastlegekontor')}
                >
                  {'Fastlegekontor'}
                </TableHeadCell>
                <TableHeadCell
                  sortable
                  sortDir={sortColumn === 'LedigePlasser' ? sortDirection : undefined}
                  onClick={() => clickSort('LedigePlasser')}
                >
                  {'Ledige plasser'}
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell dataLabel="Fastlegekontor">{'Rodeløkka'}</TableCell>
                <TableCell dataLabel="LedigePlasser">{'10'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell dataLabel="Fastlegekontor">{'Stovner'}</TableCell>
                <TableCell dataLabel="LedigePlasser">{'5'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        );
      };

      render(<SortableTable />);

      const sortButton1 = screen.getByRole('button', { name: 'Fastlegekontor' });
      const columnHeader1 = screen.getByRole('columnheader', { name: 'Fastlegekontor' });
      expect(sortButton1).toBeVisible();
      expect(columnHeader1).toBeVisible();
      expect(sortButton1).not.toHaveAttribute('aria-pressed');
      expect(columnHeader1).not.toHaveAttribute('aria-sort');

      const sortButton2 = screen.getByRole('button', { name: 'Ledige plasser' });
      const columnHeader2 = screen.getByRole('columnheader', { name: 'Ledige plasser' });
      expect(sortButton2).toBeVisible();
      expect(columnHeader2).toBeVisible();
      expect(sortButton2).not.toHaveAttribute('aria-pressed');
      expect(columnHeader2).not.toHaveAttribute('aria-sort');

      await userEvent.click(sortButton1);
      expect(sortButton1).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader1).toHaveAttribute('aria-sort', 'ascending');
      expect(sortButton2).not.toHaveAttribute('aria-pressed');
      expect(columnHeader2).not.toHaveAttribute('aria-sort');

      await userEvent.click(sortButton1);
      expect(sortButton1).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader1).toHaveAttribute('aria-sort', 'descending');
      expect(sortButton2).not.toHaveAttribute('aria-pressed');
      expect(columnHeader2).not.toHaveAttribute('aria-sort');

      await userEvent.click(sortButton2);
      expect(sortButton1).not.toHaveAttribute('aria-pressed');
      expect(columnHeader1).not.toHaveAttribute('aria-sort');
      expect(sortButton2).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader2).toHaveAttribute('aria-sort', 'ascending');

      await userEvent.click(sortButton2);
      expect(sortButton1).not.toHaveAttribute('aria-pressed');
      expect(columnHeader1).not.toHaveAttribute('aria-sort');
      expect(sortButton2).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader2).toHaveAttribute('aria-sort', 'descending');
    });
  });
});

describe('Gitt at Table kan ekspanderes', (): void => {
  describe('Når man klikker for å ekspandere', (): void => {
    it('Så vises ekspandert rad, og man kan lukke den igjen', async (): Promise<void> => {
      const ExpandableTable: React.FC = () => {
        const [expanded, setExpanded] = useState(new Array(2).fill(false));
        const toggleExpand = (index: number) => {
          const newExpanded = [...expanded];
          newExpanded[index] = !expanded[index];
          setExpanded(newExpanded);
        };

        return (
          <Table>
            <TableHead category={HeaderCategory.sortable}>
              <TableRow>
                <TableHeadCell />
                <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
                <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                onClick={() => {
                  toggleExpand(0);
                }}
                expandable
                expanded={expanded[0]}
                hideDetailsText="Skjul detaljer"
                showDetailsText="Vis detaljer"
              >
                <TableExpanderCell
                  expanded={expanded[0]}
                  expandableRowId={'0'}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                />
                <TableCell dataLabel="Fastlegekontor">{'Rodeløkka'}</TableCell>
                <TableCell dataLabel="LedigePlasser">{'10'}</TableCell>
              </TableRow>
              <TableExpandedRow
                numberOfColumns={3}
                expanded={expanded[0]}
                toggleClick={() => {
                  toggleExpand(0);
                }}
                hideDetailsText={'Skjul detaljer om Rodeløkka'}
              >
                <p>{'Her er mer info om Rodeløkka'}</p>
              </TableExpandedRow>
            </TableBody>
          </Table>
        );
      };

      render(<ExpandableTable />);

      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(3);

      const expanderButtons = within(rows[1]).getAllByRole('button', { name: 'Vis detaljer' });
      expect(expanderButtons).toHaveLength(2);

      const [desktopButton, mobileButton] = expanderButtons;

      expect(desktopButton).toHaveAttribute('aria-expanded', 'false');
      expect(desktopButton).toHaveAttribute('aria-controls', '0');
      expect(mobileButton).toHaveAttribute('aria-expanded', 'false');
      expect(mobileButton).not.toHaveAttribute('aria-controls');

      await userEvent.click(desktopButton);

      expect(desktopButton).toHaveAttribute('aria-expanded', 'true');
      expect(mobileButton).toHaveAttribute('aria-expanded', 'true');

      const expandedRowText = screen.getByText('Her er mer info om Rodeløkka');
      expect(expandedRowText).toBeVisible();

      const hideButton = screen.getByRole('button', { name: 'Skjul detaljer om Rodeløkka' });
      expect(hideButton).toBeVisible();
      expect(hideButton).toHaveAttribute('aria-expanded', 'true');

      await userEvent.click(hideButton);
      expect(hideButton).toHaveAttribute('aria-expanded', 'false');
      expect(desktopButton).toHaveAttribute('aria-expanded', 'false');
      expect(mobileButton).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
