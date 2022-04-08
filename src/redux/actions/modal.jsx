export const toOpenModal = (title, func) => {
  return {
    type: 'OPEN_MODAL',
    payload: { title, func },
  };
};

export const toCloseModal = () => {
  return { type: 'CLOSE_MODAL' };
};
