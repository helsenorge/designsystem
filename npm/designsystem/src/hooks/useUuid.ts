import { useState } from 'react';

import { uuid } from '../utils/uuid';

/**
 * Returner unik uuid som ikke endrer seg for hver render
 * @param initial id som vil overstyre id fra uuid-utility
 * @returns uuid-string
 */
export const useUuid = (initial?: string): string => {
  const [id] = useState(initial || uuid());

  return id;
};
