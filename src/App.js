import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header.component';
import ProductList from './pages/Product-List/Product_list.component';
import ProductDetails from './pages/Product-Details/ProductDetails.component';
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
