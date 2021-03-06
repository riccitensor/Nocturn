import Actions from '../actions';

export const activeListIdByUserId = (state = {}, action) => {
  switch (action.type) {
    case Actions.SET_ACTIVE_LIST_ID:
      return {
        ...state,
        [action.account.id_str]: action.listId,
      };
    default:
      return state;
  }
}
