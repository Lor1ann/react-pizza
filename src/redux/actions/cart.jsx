export const addItemToCart = (itemObj) => {
  return {
    type: 'ADD_ITEM_CART',
    payload: itemObj,
  };
};

export const deleteItem = (id) => {
  return { type: 'DELETE_ITEM_CART', payload: id };
};

export const clearAllCart = () => {
  return { type: 'CLEAR_ALL_CART' };
};

export const minusCartItem = (id) => {
  return { type: 'MINUS_ITEM_CART', payload: id };
};

export const plusCartItem = (id) => {
  return { type: 'PLUS_ITEM_CART', payload: id };
};
