import { createAtomicStateAdapter } from './atomic-state.adapter';
import { RequestState } from './atomic-state.model';

describe('AtomicStateAdapter', () => {
  describe('createAtomicStateAdapter', () => {
    it('should contain the initial state for the atomic state', () => {
      const { getInitialState } = createAtomicStateAdapter();

      const initial = getInitialState();

      expect(initial.requestState).toBe(RequestState.INIT);
    });
  });
});
