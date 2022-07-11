import {
  AtomicState,
  AtomicStateSelectors,
  RequestState
} from './atomic-state.model';
import { createAtomicStateSelectorsFactory } from './atomic-state.selectors';

describe('Atomic State Selectors', () => {
  const initialState = {
    ids: [],
    entities: {},

    requestState: RequestState.INIT
  };

  const selectorsFactory = createAtomicStateSelectorsFactory();
  const selectors: AtomicStateSelectors<
    any,
    AtomicState<any>
  > = selectorsFactory.getSelectors();

  it('should create the selectors', () => {
    expect(selectors).toBeDefined();
  });

  describe('selectIsInit', () => {
    it('should return when request state is INIT', () => {
      const result = selectors.selectIsInit({
        ...initialState,
        requestState: RequestState.INIT
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsLoading', () => {
    it('should return true when request state is LOADING', () => {
      const result = selectors.selectIsLoading({
        ...initialState,
        requestState: RequestState.LOADING
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsLoadingMore', () => {
    it('should return when request state is LOADING_MORE', () => {
      const result = selectors.selectIsLoadingMore({
        ...initialState,
        requestState: RequestState.LOADING_MORE
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsLoadingOrLoadingMore', () => {
    it('should return when request state is LOADING or LOADING_MORE', () => {
      expect(
        selectors.selectIsLoadingOrLoadingMore({
          ...initialState,
          requestState: RequestState.LOADING_MORE
        })
      ).toBeTruthy();
      expect(
        selectors.selectIsLoadingOrLoadingMore({
          ...initialState,
          requestState: RequestState.LOADING
        })
      ).toBeTruthy();
    });
  });

  describe('selectIsProcessing', () => {
    it('should return when request state is PROCESSING', () => {
      const result = selectors.selectIsProcessing({
        ...initialState,
        requestState: RequestState.PROCESSING
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsResolved', () => {
    it('should return when request state is RESOLVED', () => {
      const result = selectors.selectIsResolved({
        ...initialState,
        requestState: RequestState.RESOLVED
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsFailed', () => {
    it('should return when request state is FAILED', () => {
      const result = selectors.selectIsFailed({
        ...initialState,
        requestState: RequestState.FAILED
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsRejected', () => {
    it('should return when request state is REJECTED', () => {
      const result = selectors.selectIsRejected({
        ...initialState,
        requestState: RequestState.REJECTED
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsStopping', () => {
    it('should return when request state is STOPPING', () => {
      const result = selectors.selectIsStopping({
        ...initialState,
        requestState: RequestState.STOPPING
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectIsStopped', () => {
    it('should return when request state is Stopped', () => {
      const result = selectors.selectIsStopped({
        ...initialState,
        requestState: RequestState.STOPPED
      });
      expect(result).toBeTruthy();
    });
  });

  describe('selectHasResults', () => {
    it('should return true when there are entities', () => {
      const result = selectors.selectHasResults({
        ...initialState,
        ids: ['id']
      });
      expect(result).toBeTruthy();
    });

    it('should return false when there are no entities', () => {
      const resultEmptyArray = selectors.selectHasResults({
        ...initialState,
        ids: []
      });
      expect(resultEmptyArray).toBeFalsy();

      const resultArrayIsNull = selectors.selectHasResults({
        ...initialState,
        ids: []
      });
      expect(resultArrayIsNull).toBeFalsy();
    });
  });

  describe('selectHasNoResults', () => {
    it('should return false when there are entities', () => {
      const result = selectors.selectHasNoResults({
        ...initialState,
        ids: ['id']
      });
      expect(result).toBeFalsy();
    });

    it('should return true when there are no entities', () => {
      const resultEmptyArray = selectors.selectHasNoResults({
        ...initialState,
        ids: []
      });
      expect(resultEmptyArray).toBeTruthy();

      const resultArrayIsNull = selectors.selectHasNoResults({
        ...initialState,
        ids: []
      });
      expect(resultArrayIsNull).toBeTruthy();
    });
  });

  describe('selectHasError', () => {
    it('should return true when there is an error message', () => {
      const result = selectors.selectHasError({
        ...initialState,
        requestState: { errorMsg: 'failed', errorCode: 404 }
      });
      expect(result).toBeTruthy();
    });

    it('should return true when there is an error code', () => {
      const result = selectors.selectHasError({
        ...initialState,
        requestState: { errorMsg: undefined, errorCode: 402 }
      });
      expect(result).toBeTruthy();
    });

    it('should return false when the errorMsg is null or undefined', () => {
      expect(
        selectors.selectHasError({
          ...initialState,
          requestState: { errorMsg: undefined }
        })
      ).toBeFalsy();
      expect(
        selectors.selectHasError({
          ...initialState,
          requestState: RequestState.RESOLVED
        })
      ).toBeFalsy();
    });

    it('should return false when the errorResponse is null or undefined', () => {
      expect(
        selectors.selectHasError({
          ...initialState,
          requestState: { errorMsg: undefined, errorCode: undefined }
        })
      ).toBeFalsy();
      expect(
        selectors.selectHasError({
          ...initialState,
          requestState: RequestState.RESOLVED
        })
      ).toBeFalsy();
    });
  });

  describe('selectErrorMessage', () => {
    it('should return the error message', () => {
      const mockedErrorMessage = 'failed';
      const result = selectors.selectErrorMessage({
        ...initialState,
        requestState: { errorMsg: mockedErrorMessage }
      });
      expect(result).toBe(mockedErrorMessage);
    });
  });

  describe('selectErrorCode', () => {
    it('should return the error response', () => {
      const result = selectors.selectErrorCode({
        ...initialState,
        requestState: { errorMsg: undefined, errorCode: 305 }
      });
      expect(result).toEqual(305);
    });
  });
});
