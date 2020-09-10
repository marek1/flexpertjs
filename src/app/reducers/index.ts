import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromCompany from './company.reducers';
import * as fromGlobal from './global.reducers';
import { InjectionToken } from '@angular/core';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  [fromCompany.featureKey]: fromCompany.State;
  [fromGlobal.featureKey]: fromGlobal.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    [fromCompany.featureKey]: fromCompany.reducer,
    [fromGlobal.featureKey]: fromGlobal.reducer,
  })
});

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

/**
 * Company Reducers
 */

export const selectCompanyState = createFeatureSelector<AppState, fromCompany.State>(
  fromCompany.featureKey
);



/**
 * Global Reducers
 */

export const selectGlobalState = createFeatureSelector<AppState, fromGlobal.State>(
  fromGlobal.featureKey
);

export const getGlobalMessages = createSelector(
  selectGlobalState,
  fromGlobal.getMessages
);
