import { vi as jest } from 'vitest';

import * as uuidUtils from '../utils/uuid';

const testId = {
  id: 0,
};

/**
 * Returnerer en unik, forutsigbar id hver gang uuid() kalles
 */
jest.spyOn(uuidUtils, 'uuid').mockImplementation(() => {
  testId.id++;
  return `testid-${testId.id}`;
});
