import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { usePrevious } from './usePrevious';

export const useExpand = (expanded: boolean, onExpand?: (isExpanded: boolean) => void): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [prevExpanded, setPrevExpanded] = useState(expanded);
  const previousIsExpanded = usePrevious(isExpanded);

  if (expanded !== prevExpanded) {
    setPrevExpanded(expanded);
    setIsExpanded(expanded);
  }

  useEffect(() => {
    if (onExpand && isExpanded !== !!previousIsExpanded) {
      onExpand(isExpanded);
    }
  }, [isExpanded, onExpand]);

  return [isExpanded, setIsExpanded];
};
