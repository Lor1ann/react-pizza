import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';

const PizzaBlock = ({ id, price, title, image, onClickAddCart, amount }) => {
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);

  const onAddCart = () => {
    const item = { id, title, price, image, size: sizes[activeSize], type: types[activeType] };
    onClickAddCart(item);
  };

  const types = ['тонкое', 'традиционное'];
  const sizes = ['27см.', '31см.', '54см.'];

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((el, index) => (
            <li
              key={index}
              onClick={() => setActiveType(index)}
              className={activeType === index ? 'active' : null}>
              {el}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((el, index) => (
            <li
              key={index}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? 'active' : null}>
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={onAddCart} amount={amount} />
      </div>
    </div>
  );
};

export default PizzaBlock;
