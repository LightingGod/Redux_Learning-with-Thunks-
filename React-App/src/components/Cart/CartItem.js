import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { SelectProdAction } from '../Redux/Slices/SelectedProducts';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();
  const increaseHandler = ()=>{
    dispatch(SelectProdAction.increase({myid: id}));//Have to call the methods as SelectedProdActions.increase() will return a javascript object which is made from the reducer of splice that we made. and that object is dispatched to do action
  }

  const decremnetHandler = ()=>{
    dispatch(SelectProdAction.remove({myid : id}));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decremnetHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
