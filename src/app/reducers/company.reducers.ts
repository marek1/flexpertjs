import { createReducer } from '@ngrx/store';

export const featureKey = 'basket';

export interface State {
  loggedIn: boolean;
}

const initialState: State = {
  loggedIn: false
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
);
