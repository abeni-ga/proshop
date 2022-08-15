import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.component';
import ProductCard from './components/Product-Card/Product-Card.component';
import ProductList from './components/Product-List/Product_list.component.jsx';
import ProductDetails from './components/Product-Details/ProductDetails.component';
function App() {
  return (
    <main className="App">
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ProductList/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    
    </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
