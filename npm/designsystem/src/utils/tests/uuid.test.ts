import { uuid } from '../uuid';

describe('Gitt at uuid kalles', (): void => {
  describe('Når NODE_ENV=test', (): void => {
    it('Så returneres test', (): void => {
      const result = uuid();

      expect(result).toEqual('test');
    });
  });
});
