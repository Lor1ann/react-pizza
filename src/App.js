import React from 'react';
import { useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () => {
  const modal = useSelector(({ modal }) => modal);

  return (
    <>
      {modal.isOpen && <Modal title={modal.title} id={modal.id} func={modal.func} />}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
