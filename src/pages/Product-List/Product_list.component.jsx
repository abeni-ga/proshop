import products from "../../products"
import ProductCard from "../../components/Product-Card/Product-Card.component"
import './Product_list.styles.scss';
const ProductList = ()=>{
    return(
    <div className="product-list-container">
        
        <div className="product-list">
        {products.map((product,index)=>{
           return <ProductCard product={product} key={index}/>
        })}
        </div>
        </div>
    )
}

export default ProductList