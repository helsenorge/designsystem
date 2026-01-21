import React from 'react';

import type { SingleSelectContextType } from './SingleSelect';

export const useSingleSelect = (): SingleSelectContextType | null => React.useContext(SingleSelectContext);
