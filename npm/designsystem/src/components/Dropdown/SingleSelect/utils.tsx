import React from 'react';

import type { SingleSelectContextType } from './SingleSelect';

export const SingleSelectContext = React.createContext<SingleSelectContextType | null>(null);

export const useSingleSelect = (): SingleSelectContextType | null => React.useContext(SingleSelectContext);
