import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../redux/slice.js";
import { fetchProducts } from "../redux/productSlice.js";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.Products.items);
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <section className="product-section">
      <div className="grid">
        {productSelector.length &&
          productSelector.map((item) => (
            <div key={item.id}>
              <div className="card">
                <img src={item.thumbnail} alt="products images" />
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="brand">{item.brand}</div>
                  <div className="price">{item.price}</div>
                  <div className="rating">{item.rating}</div>
                  {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                    <button
                      className="add-to-cart-btn btn-disable"
                      onClick={() => dispatch(deleteItem(item))}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="add-to-cart-btn"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Product;
