import './App.css';
import Header from './components/Header/Header.component';
import ProductCard from './components/Product-Card/Product-Card.component';
import ProductList from './components/Product-List/Product_list.component.jsx';

function App() {
  return (
    <main className="App">
    <Header/>
    <ProductList/>
    </main>
  );
}

export default App;
