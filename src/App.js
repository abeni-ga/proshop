import {Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.component';
import ProductList from './pages/Product-List/Product_list.component';
import ProductDetails from './pages/Product-Details/ProductDetails.component';
import CartScreen from './pages/cartScreen/cart.screen';
function App() {
  return (
    <main className="App">
    <Header/>
    <>
    <Routes>
    <Route path='/' element={<ProductList/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='/cart' element={<CartScreen/>}/>
    
    </Routes>
    </>
    </main>
  );
}

export default App;
