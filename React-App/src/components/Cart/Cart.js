import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const totalAmount = useSelector((state)=>{
    return state.selectedProducts.TotalAmount;
  });

  const products = useSelector((state)=>{
    return state.selectedProducts.SelectedProducts;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((element) => {
          return (<CartItem key={element.myid} item={{ id: element.myid, title: element.name, quantity: element.quantity, total: totalAmount, price: element.price }} />)
        })}
      </ul>
    </Card>
  );
};

export default Cart;
