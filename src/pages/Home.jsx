import React from 'react';
import Header from '../components/Header';
import PizzaBlock from '../components/PizzaBlock.jsx';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../redux/actions/pizza';
import { addItemToCart } from '../redux/actions/cart';

const Home = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.items);
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState(0);
  const [order, setOrder] = React.useState(false);
  const sortItems = [
    { name: 'рейтингу', type: 'rating', order },
    { name: 'цене', type: 'price', order },
    { name: 'алфавиту', type: 'name', order },
  ];
  const handleAddToCart = (obj) => {
    dispatch(addItemToCart(obj));
  };

  const state = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(fetchItems(sortItems[activeSort], activeCategory, order));
  }, [activeSort, dispatch, activeCategory, order]);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              name={categories}
              activeCategory={activeCategory}
              onCategory={setActiveCategory}
            />
            <Sort
              order={order}
              onArrow={() => {
                setOrder(!order);
              }}
              name={sortItems.map((obj) => obj.name)}
              activeSort={activeSort}
              onSort={setActiveSort}
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock
                amount={cartItems[obj.id] && cartItems[obj.id].length}
                id={obj.id}
                price={obj.price}
                key={obj.id}
                title={obj.title}
                image={obj.imageUrl}
                onClickAddCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
