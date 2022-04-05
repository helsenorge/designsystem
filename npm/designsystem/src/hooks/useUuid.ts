import { useState } from 'react';
import { uuid } from '../utils/uuid';

/**
 * Returner unik uuid som ikke endrer seg for hver render
 *
 * @returns uuid-string
 */
export const useUuid = (): string => {
  const [id] = useState(uuid());

  return id;
};
