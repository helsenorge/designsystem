import * as uuidUtils from '../utils/uuid';

const testId = {
  id: 0,
};

/**
 * Returnerer en unik, forutsigbar id hver gang uuid() kalles
 */
vi.spyOn(uuidUtils, 'uuid').mockImplementation(() => {
  testId.id++;
  return `testid-${testId.id}`;
});
