import { createReducer, on } from '@ngrx/store';
import { GlobalActions } from '../actions';
import { Message } from '../interfaces/message';

export const featureKey = 'global';

export interface State {
  messages: Message[];
}

const initialState: State = {
  messages: []
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(GlobalActions.setMessage, (state, {body, color}) => {
    return ({
      ...state,
      messages: [...state.messages, {
        id: state.messages.length,
        body,
        color
      }]
    });
  }),
  on(GlobalActions.removeMessage, (state, {id}) => {
    return ({
      ...state,
      messages: state.messages.filter((msg: Message) => msg.id !== id)
    });
  }),
);

export const getMessages = (state: State) => state.messages;

