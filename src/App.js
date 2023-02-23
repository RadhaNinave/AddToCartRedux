import './App.css';
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products'
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { useEffect,Fragment } from 'react';
import { sendCartData,fetchCartData } from './components/store/cart-actions';
let isInitial = true
function App() {
  const show =useSelector((state)=>state.showCart.isCartShow)
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state)=> state.showCart.notification)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
  
    if(isInitial){
      isInitial = false;
      return
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
   
  }, [cart, dispatch]);

  return (
    <Fragment>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.title} />}

 <Layout>
{show && <Cart /> }
<Products />
 </Layout>
 </Fragment>
  );
}

export default App;
