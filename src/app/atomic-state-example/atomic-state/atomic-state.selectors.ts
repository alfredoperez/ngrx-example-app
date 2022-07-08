import { Dictionary } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import {
  AtomicState,
  AtomicStateSelectors,
  ErrorState,
  RequestState
} from './atomic-state.model';

/**
 * Creates all the selectors
 */
export function createAtomicStateSelectorsFactory<T>() {
  function getSelectors(): AtomicStateSelectors<T, AtomicState<T>>;

  // eslint-disable-next-line no-redeclare
  function getSelectors<V>(
    // eslint-disable-next-line no-unused-vars
    selectState: (state: V) => AtomicState<T>
  ): AtomicStateSelectors<T, V>;

  function getSelectors(
    selectState?: (state: any) => AtomicState<T>
  ): AtomicStateSelectors<T, any> {
    const selectIds = (state: any) => state.ids;

    const selectEntities = (state: AtomicState<T>) => state.entities;

    const selectAll = createSelector(
      selectIds,
      selectEntities,
      (ids: T[], entities: Dictionary<T>): any =>
        ids.map((id: any) => (entities as any)[id])
    );

    const selectTotal = createSelector(selectIds, (ids) => ids.length);

    const selectIsInit = (state: AtomicState<T>) =>
      state.requestState === RequestState.INIT;

    const selectIsLoading = (state: AtomicState<T>) =>
      state.requestState === RequestState.LOADING;

    const selectIsLoadingMore = (state: AtomicState<T>) =>
      state.requestState === RequestState.LOADING_MORE;

    const selectIsLoadingOrLoadingMore = (state: AtomicState<T>) =>
      state.requestState === RequestState.LOADING ||
      state.requestState === RequestState.LOADING_MORE;

    const selectIsProcessing = (state: AtomicState<T>) =>
      state.requestState === RequestState.PROCESSING;

    const selectIsResolved = (state: AtomicState<T>) =>
      state.requestState === RequestState.RESOLVED;

    const selectIsFailed = (state: AtomicState<T>) =>
      state.requestState === RequestState.FAILED;

    const selectIsRejected = (state: AtomicState<T>) =>
      state.requestState === RequestState.REJECTED;

    const selectIsStopping = (state: AtomicState<T>) =>
      state.requestState === RequestState.STOPPING;

    const selectIsStopped = (state: AtomicState<T>) =>
      state.requestState === RequestState.STOPPED;

    const selectHasResults = createSelector(
      selectIds,
      (ids) => ids !== null && ids.length > 0
    );

    const selectHasNoResults = createSelector(
      selectHasResults,
      (hasResults) => !hasResults
    );

    const selectHasError = (state: AtomicState<T>) =>
      !!(
        (state.requestState as ErrorState).errorMsg ||
        (state.requestState as ErrorState).errorCode
      );

    const selectErrorMessage = (state: AtomicState<T>) =>
      (state.requestState as ErrorState).errorMsg;

    const selectErrorCode = (state: AtomicState<T>) =>
      (state.requestState as ErrorState).errorCode;

    if (!selectState) {
      return {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
        selectIsInit,
        selectIsLoading,
        selectIsLoadingMore,
        selectIsLoadingOrLoadingMore,
        selectIsProcessing,
        selectIsResolved,
        selectIsFailed,
        selectIsRejected,
        selectIsStopping,
        selectIsStopped,
        selectHasResults,
        selectHasNoResults,
        selectHasError,
        selectErrorMessage,
        selectErrorCode
      };
    }

    return {
      selectIds: createSelector(selectState, selectIds),
      selectEntities: createSelector(selectState, selectEntities),
      selectAll: createSelector(selectState, selectAll),
      selectTotal: createSelector(selectState, selectTotal),
      selectIsInit: createSelector(selectState, selectIsInit),
      selectIsLoading: createSelector(selectState, selectIsLoading),
      selectIsLoadingMore: createSelector(selectState, selectIsLoadingMore),
      selectIsLoadingOrLoadingMore: createSelector(
        selectState,
        selectIsLoadingOrLoadingMore
      ),
      selectIsProcessing: createSelector(selectState, selectIsProcessing),
      selectIsResolved: createSelector(selectState, selectIsResolved),
      selectIsFailed: createSelector(selectState, selectIsFailed),
      selectIsRejected: createSelector(selectState, selectIsRejected),
      selectIsStopping: createSelector(selectState, selectIsStopping),
      selectIsStopped: createSelector(selectState, selectIsStopped),
      selectHasResults: createSelector(selectState, selectHasResults),
      selectHasNoResults: createSelector(selectState, selectHasNoResults),
      selectHasError: createSelector(selectState, selectHasError),
      selectErrorMessage: createSelector(selectState, selectErrorMessage),
      selectErrorCode: createSelector(selectState, selectErrorCode)
    };
  }

  return { getSelectors };
}
