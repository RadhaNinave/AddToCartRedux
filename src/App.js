import './App.css';
import Layout from './components/Layout/Layout'
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products'
import { useSelector } from 'react-redux';
function App() {
  const show =useSelector((state)=>state.showCart.isCartShow)
  return (
   
 <Layout>
{show && <Cart /> }
<Products />
 </Layout>
  );
}

export default App;
