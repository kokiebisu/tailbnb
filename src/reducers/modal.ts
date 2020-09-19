export const modalReducer = (state, action) => {
  switch (action.type) {
    case 'MENU_MODAL':
      console.log('called');
      return { ...state, menu: !state.menu };
    default:
      return state;
  }
};
