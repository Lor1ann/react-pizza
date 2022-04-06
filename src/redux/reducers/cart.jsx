const initialState = { items: {}, totalPrice: 0, totalAmount: 0 };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLEAR_ALL_CART':
      return { items: {}, totalPrice: 0, totalAmount: 0 };

    case 'DELETE_ITEM_CART': {
      const newItems = {
        ...state.items,
      };
      const currPrice = newItems[action.payload].length * newItems[action.payload][0].price;
      const currAmount = newItems[action.payload].length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currPrice,
        totalAmount: state.totalAmount - currAmount,
      };
    }

    case 'ADD_ITEM_CART':
      const obj = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allItems = [].concat.apply([], Object.values(obj));
      const totalPrice = allItems.reduce((acc, curr) => curr.price + acc, 0);

      return {
        ...state,
        items: obj,
        totalAmount: allItems.length,
        totalPrice,
      };

    default:
      return state;
  }
}
