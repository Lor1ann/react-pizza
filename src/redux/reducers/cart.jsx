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
      console.log(allItems);
      const totalPrice = allItems.reduce((acc, curr) => curr.price + acc, 0);

      return {
        ...state,
        items: obj,
        totalAmount: allItems.length,
        totalPrice,
      };

    case 'MINUS_ITEM_CART':
      if (state.items[action.payload].length > 1) {
        const newArrWithItems = [...state.items[action.payload]];
        newArrWithItems.splice(state.items[action.payload - 1], 1);

        return {
          ...state,
          items: { ...state.items, [action.payload]: [...newArrWithItems] },
          totalAmount: state.totalAmount - 1,
          totalPrice: state.totalPrice - state.items[action.payload][0].price,
        };
      } else {
        return state;
      }

    case 'PLUS_ITEM_CART':
      const currItem = state.items[action.payload][0];

      return {
        ...state,
        items: { ...state.items, [action.payload]: [...state.items[action.payload], currItem] },
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + state.items[action.payload][0].price,
      };

    default:
      return state;
  }
}
