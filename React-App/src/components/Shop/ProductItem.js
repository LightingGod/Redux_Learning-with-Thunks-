import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { SelectProdAction } from '../Redux/Slices/SelectedProducts';

const ProductItem = (props) => {
  const { id, title, prices, description } = props;

  const dispatch = useDispatch();

  const AddHandler = ()=>{
    dispatch(SelectProdAction.increase({
      price: prices,
      quantity: 1,
      name: title,
      myid: id,
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${prices.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
