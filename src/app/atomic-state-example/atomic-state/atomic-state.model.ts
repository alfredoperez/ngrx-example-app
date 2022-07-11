import { EntityState } from '@ngrx/entity';
import {
  Comparer,
  EntitySelectors,
  EntityStateAdapter,
  IdSelector
} from '@ngrx/entity/src/models';

/**
 * The possible request state
 */
export enum RequestState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADING_MORE = 'LOADING_MORE',
  PROCESSING = 'PROCESSING',
  RESOLVED = 'RESOLVED',
  FAILED = 'FAILED',
  REJECTED = 'REJECTED',
  STOPPING = 'STOPPING',
  STOPPED = 'STOPPED'
}

/**
 * The state use to save anything related to the error
 */
export interface ErrorState {
  /**
   * The Error Code from the request
   */
  errorCode?: number;

  /**
   * The request error message
   */
  errorMsg?: string;
}

/**
 * State to contain a single property that represent the state of
 * te request and also saves data related to pagination or error.
 */
export interface AtomicState<T> extends EntityState<T> {
  /**
   * The current state of the request.
   * This can be either state of the request or the error state that contains the error message
   */
  requestState: RequestState | ErrorState;
}

/**
 * Adapter for the Atomic State
 */
export interface AtomicStateAdapter<T> extends EntityStateAdapter<T> {
  selectId: IdSelector<T>;
  sortComparer: false | Comparer<T>;
  getSelectors(): AtomicStateSelectors<T, AtomicState<T>>;
  getSelectors<V>(
    selectState: (state: V) => AtomicState<T>
  ): AtomicStateSelectors<T, V>;
  getInitialState(): AtomicState<T>;
  getInitialState<S extends object>(state: S): AtomicState<T> & S;
}

export interface AtomicStateSelectors<T, V> extends EntitySelectors<T, V> {
  /**
   * Selector for the state when the request has not been made yet
   */
  selectIsInit: (state: V) => boolean;

  /**
   * Selector for the state when it is in loading or requesting state
   */
  selectIsLoading: (state: V) => boolean;

  /**
   *
   * Selector for the state when the request was executed again to get more
   * results. This is used for pagination
   */
  selectIsLoadingMore: (state: V) => boolean;

  /**
   *
   * Selector for the state when the request is loading or loading more
   */
  selectIsLoadingOrLoadingMore: (state: V) => boolean;

  /**
   * Selector for the state when a request that takes long time has been made
   */
  selectIsProcessing: (state: V) => boolean;

  /**
   * Selector for the state when the request successfully complete
   */
  selectIsResolved: (state: V) => boolean;

  /**
   * Selector for the state when the request did not complete
   */
  selectIsFailed: (state: V) => boolean;

  /**
   * Selector for the state when the request was rejected
   */
  selectIsRejected: (state: V) => boolean;

  /**
   * Selector for the state when the request is being stopped
   */
  selectIsStopping: (state: V) => boolean;

  /**
   * Selector for the state when the request was stopped
   */
  selectIsStopped: (state: V) => boolean;

  /**
   * Selector that determines if there were any results
   */
  selectHasResults: (state: V) => boolean;

  /**
   * Selector that determines if there was not any results
   */
  selectHasNoResults: (state: V) => boolean;

  /**
   * Selector for whether there was an error
   */
  selectHasError: (state: V) => boolean;

  /**
   * Selector for the error message
   */
  selectErrorMessage: (state: V) => string | undefined;

  /**
   * Selector for the error code
   */
  selectErrorCode: (state: V) => number | undefined;
}
