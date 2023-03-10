import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { usePrevious } from './usePrevious';

export const useExpand = (expanded: boolean, onExpand?: (isExpanded: boolean) => void): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const previousIsExpanded = usePrevious(isExpanded);

  useEffect(() => {
    if (expanded !== isExpanded) {
      setIsExpanded(expanded);
    }
  }, [expanded]);

  useEffect(() => {
    if (onExpand && isExpanded !== !!previousIsExpanded) {
      onExpand(isExpanded);
    }
  }, [isExpanded, onExpand]);

  return [isExpanded, setIsExpanded];
};
