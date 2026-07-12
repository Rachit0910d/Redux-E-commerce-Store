import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/slice";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(cartSelector);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    setCartItems(cartSelector);
  }, [cartSelector])



  const handleQuantity = (id, q) => {
    let quan = parseInt(q) > 1 ? parseInt(q) : 1
    const cartTempItems = cartSelector.map((item) => {
      return item.id === id ? {...item, quan} : item
    })


    setCartItems(cartTempItems)
    console.log(cartItems.length)
  }

  return (
    <div className="cart-container">
      {cartItems.length > 0
        ? cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.thumbnail} alt="" />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>{item.brand}</p>
                </div>
              </div>
              <div className="item-action" >
                <div>
                  <input onChange={(e) => handleQuantity(item.id, e.target.value)} value={item.quan? item.quan: 1} type="number" placeholder="enter quan" />
                  <div>
                    <span className="price">{(item.quan ?  item.price*item.quan : item.price).toFixed(2)}$</span>
                    <button onClick={() => dispatch(deleteItem(item))} className="add-to-cart-btn">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}

      <div className="cart-total">
        Total: {cartItems.reduce((sum, item) => item.quan? sum + item.price*item.quan :sum + item.price, 0).toFixed(2)}$
      </div>

      <button className="place-btn">Place Order</button>
    </div>
  );
};

export default CartList;
