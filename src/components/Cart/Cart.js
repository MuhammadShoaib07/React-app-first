import React, { useContext } from "react";
import classes from "../../assets/Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Card from "../UI/Card";
import MainImage from "../Layout/MainImage";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasAmount = cartCtx.items.length > 0;

  const cartItemAddHanlder = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemovHanlder = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHanlder.bind(null, item)}
            onRemove={cartItemRemovHanlder.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <React.Fragment>
      <MainImage />
      <div style={{ margin: "5rem 3rem" }}>
        <Card>
          {cartItem}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasAmount && <button className={classes.button}>Order</button>}
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Cart;
