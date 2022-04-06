import axios from 'axios';

export const setItems = (items) => {
  return {
    type: 'SET_ITEMS',
    payload: items,
  };
};

export const fetchItems = (sort, category, order) => async (dispatch) => {
  try {
    const data = await axios.get(
      `/pizzas?${sort !== null ? `_sort=${sort.type}` : null}${
        category !== 0 ? `&category=${category}` : ''
      }&_order=${order === true ? 'asc' : 'desc'}`,
    );
    dispatch(setItems(data.data));
  } catch (error) {
    console.log(error);
  }
};
