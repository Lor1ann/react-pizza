const initialState = { items: [] };

export default function pizzaReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return { items: [...action.payload] };

    default:
      return state;
  }
}
