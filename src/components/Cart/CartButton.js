import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { ShowCartAction } from '../store/Show';
const CartButton = (props) => {

 
  const dispatch = useDispatch();
  const showCartHandler = ()=>{
    dispatch(ShowCartAction.show());
  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
