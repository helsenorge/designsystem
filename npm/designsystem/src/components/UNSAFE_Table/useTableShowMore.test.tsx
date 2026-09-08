import { act, renderHook, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useTableShowMore } from './useTableShowMore';

const data = ['a', 'b', 'c', 'd', 'e'];

describe('Gitt at useTableShowMore brukes', (): void => {
  describe('Når pageSize ikke er satt', (): void => {
    test('Så vises alle radene', (): void => {
      const { result } = renderHook(() => useTableShowMore({ data }));

      expect(result.current.visibleData).toEqual(data);
      expect(result.current.hasMore).toBe(false);
    });
  });

  describe('Når pageSize er satt', (): void => {
    test('Så vises kun første side', (): void => {
      const { result } = renderHook(() => useTableShowMore({ data, pageSize: 2 }));

      expect(result.current.visibleData).toEqual(['a', 'b']);
      expect(result.current.hasMore).toBe(true);
    });
  });

  describe('Når showMore kalles', (): void => {
    test('Så vises neste side og newRowsStartIndex peker på første nye rad', (): void => {
      const { result } = renderHook(() => useTableShowMore({ data, pageSize: 2 }));

      act(() => {
        result.current.showMore();
      });

      expect(result.current.visibleData).toEqual(['a', 'b', 'c', 'd']);
      expect(result.current.newRowsStartIndex).toBe(2);
      expect(result.current.hasMore).toBe(true);
    });

    test('Så begrenses antall rader til datalengden', (): void => {
      const { result } = renderHook(() => useTableShowMore({ data, pageSize: 2 }));

      act(() => {
        result.current.showMore();
      });
      act(() => {
        result.current.showMore();
      });

      expect(result.current.visibleData).toEqual(data);
      expect(result.current.hasMore).toBe(false);
    });
  });

  describe('Når reset kalles', (): void => {
    test('Så vises kun første side igjen', (): void => {
      const { result } = renderHook(() => useTableShowMore({ data, pageSize: 2 }));

      act(() => {
        result.current.showMore();
      });
      act(() => {
        result.current.reset();
      });

      expect(result.current.visibleData).toEqual(['a', 'b']);
      expect(result.current.newRowsStartIndex).toBeUndefined();
    });
  });

  describe('Når siste side vises og knappen forsvinner', (): void => {
    const ShowMoreExample: React.FC = () => {
      const { visibleData, hasMore, showMore, newRowsStartIndex, firstNewRowRef } = useTableShowMore<string, HTMLButtonElement>({
        data,
        pageSize: 3,
      });

      return (
        <div>
          <ul>
            {visibleData.map((rad, index) => (
              <li key={rad}>
                <button ref={index === newRowsStartIndex ? firstNewRowRef : undefined}>{rad}</button>
              </li>
            ))}
          </ul>
          {hasMore && <button onClick={showMore}>{'Vis mer'}</button>}
        </div>
      );
    };

    test('Så flyttes fokus til første nye rad', async (): Promise<void> => {
      render(<ShowMoreExample />);

      await userEvent.click(screen.getByRole('button', { name: 'Vis mer' }));

      expect(screen.queryByRole('button', { name: 'Vis mer' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'd' })).toHaveFocus();
    });
  });
});
