import { ActionType, TodoType } from "./App";

export function reducer(state: TodoType[], action: ActionType) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.length, todo: action.text }];
    case "DELETE":
      return state.filter(({ id }) => id !== action.id);
  }
}