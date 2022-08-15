import products from "../../products"
import ProductCard from "../Product-Card/Product-Card.component"
import './Product_list.styles.scss';
const ProductList = ()=>{
    return(
    <div className="product-list-container">
        
        <div className="product-list">
        {products.map((product,index)=>{
            console.log(product)
           return <ProductCard product={product} key={index}/>
        })}
        </div>
        </div>
    )
}

export default ProductList