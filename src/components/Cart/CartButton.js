import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { ShowCartAction } from '../store/Show';
const CartButton = (props) => {

 const cartQuantity= useSelector((state)=>state.cart.totalQuantity)
  const dispatch = useDispatch();
  const showCartHandler = ()=>{
    dispatch(ShowCartAction.show());
  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
