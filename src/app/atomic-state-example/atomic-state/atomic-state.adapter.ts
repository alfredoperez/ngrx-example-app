import { createEntityAdapter } from '@ngrx/entity';
import { Comparer, IdSelector } from '@ngrx/entity/src/models';
import { createAtomicStateSelectorsFactory } from './atomic-state.selectors';
import {
  AtomicState,
  AtomicStateAdapter,
  RequestState
} from './atomic-state.model';

/**
 * Returns the initial state
 */
function getInitialAtomicState<V>(): AtomicState<V> {
  return {
    ids: [],
    entities: {},
    requestState: RequestState.INIT
  };
}

function createInitialAtomicStateFactory<V>() {
  function getInitialState(): AtomicState<V>;
  // eslint-disable-next-line no-redeclare
  function getInitialState<S extends object>(
    additionalState: S
  ): AtomicState<V> & S;
  // eslint-disable-next-line no-redeclare
  function getInitialState(additionalState: any = {}): any {
    return Object.assign(getInitialAtomicState(), additionalState);
  }

  return { getInitialState };
}

export function createAtomicStateAdapter<T>(options?: {
  selectId?: IdSelector<T>;
  sortComparer?: false | Comparer<T>;
}): AtomicStateAdapter<T> {
  const entityAdapter = createEntityAdapter<T>(options);
  const selectorsFactory = createAtomicStateSelectorsFactory<T>();
  const stateFactory = createInitialAtomicStateFactory<T>();

  return {
    ...entityAdapter,
    ...stateFactory,
    ...selectorsFactory
  } as AtomicStateAdapter<T>;
}
