import React from 'react';
import { useDispatch } from 'react-redux';
import { toCloseModal } from '../redux/actions/modal';

const Modal = (props) => {
  const dispatch = useDispatch();
  const onClickYes = () => {
    dispatch(props.func());
    dispatch(toCloseModal());
  };

  return (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__title">{props.title}</div>
        <div className="modal__buttons">
          <button className="modal__button" onClick={() => onClickYes()}>
            Да
          </button>
          <button className="modal__button" onClick={() => dispatch(toCloseModal())}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
