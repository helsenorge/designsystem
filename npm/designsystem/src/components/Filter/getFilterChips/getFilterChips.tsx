import type { FilterValues, UseFilterReturn } from '../FiltreringsPOC/useFilter';

import Chip from '../../Chip';

export interface getFilterChipsArgs<T extends FilterValues> {
  /** The filter instance from useFilter */
  filter: UseFilterReturn<T>;
  /** Look up the display label for a filter key + value */
  getLabel: (key: keyof T, value: unknown) => string;
  /** Called when a chip is clicked (f.ex. to open the drawer at that filter category) */
  onChipClick: (key: keyof T, value: unknown) => void;
  /** Called when a chip's close button is clicked. If not provided, defaults to filter.removeFilter */
  onChipRemove?: (key: keyof T, value: unknown) => void;
  /** Called when the overflow chip is clicked */
  onOverflowChipClick: () => void;
  /** Function for mapping if close button is shown on chip or not */
  willShowCloseButton?: (key: keyof T, value?: unknown) => boolean;
}

// @todo: gjør om til hjelpefunksjon istedenfor komponent
function getFilterChips<T extends FilterValues>({
  filter,
  getLabel,
  onChipClick,
  onChipRemove,
  onOverflowChipClick,
  willShowCloseButton,
}: getFilterChipsArgs<T>): React.ReactNode[] {
  const maxVisible = 5;

  const allChips = Object.entries(filter.filters).flatMap(([key, raw]) => {
    const values = [raw ?? []].flat();
    return values.map(v => ({ key, value: v }));
  });

  const visibleChips = allChips.slice(0, maxVisible);
  const overflowCount = allChips.length - maxVisible;

  return [
    visibleChips.map(({ key, value: v }) => (
      <Chip
        key={`${key}-${v}`}
        onChipClick={() => onChipClick(key as keyof T, v)}
        onCloseClick={() => {
          if (onChipRemove) {
            onChipRemove(key as keyof T, v);
          } else {
            filter.removeFilter(key, v);
          }
        }}
        withCloseButton={willShowCloseButton?.(key, v)}
      >
        {getLabel(key as keyof T, v)}
      </Chip>
    )),
    overflowCount > 0 && <Chip key="overflow" onChipClick={onOverflowChipClick} withCloseButton={false}>{`+${overflowCount}`}</Chip>,
  ];
}

export default getFilterChips;
