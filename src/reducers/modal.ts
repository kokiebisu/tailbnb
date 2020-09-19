export const modalReducer = (state, action) => {
  switch (action.type) {
    case 'MENU_MODAL':
      return { ...state, modal: { menu: !state.modal.menu } };
    default:
      return state;
  }
};
