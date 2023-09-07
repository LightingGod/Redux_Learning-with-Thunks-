import classes from './CartButton.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { CartAction } from '../Redux/Slices/ShowCart';

const CartButton = (props) => {
  const myShow = useSelector((state)=>{
    return state.showCart.ShowCart;
  });

  const number = useSelector((state)=>{
    return state.selectedProducts.SelectedProducts.length;
  })

  const dispatch = useDispatch();

  const buttontapHandler = ()=>{
    if(myShow===true){
      dispatch(CartAction.hide());
      return;
    }
    if(myShow===false){
      dispatch(CartAction.show());
      return;
    }
  };
  
  return (
    <button onClick={buttontapHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{number}</span>
    </button>
  );
};

export default CartButton;
