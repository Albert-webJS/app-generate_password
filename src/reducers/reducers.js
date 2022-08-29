export const UPDATESTATE = "UPDATESTATE";

export function updateState(state, action) {
  switch (action.type) {
    case UPDATESTATE: {
      return {
        ...state,
        password: state.password + action.symbol,
      };
    }
    default:
      return state;
  }
}
