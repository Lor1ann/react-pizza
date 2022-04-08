const initialState = { isOpen: false, title: null, func: null };

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      console.log(action.payload.func);

      return {
        isOpen: true,
        title: action.payload.title,
        func: action.payload.func,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
}
