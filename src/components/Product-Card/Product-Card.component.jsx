import './Product-Card.style.scss'
import Rating from '../Rating/Rating.component'

const ProductCard = ({product})=>{
    return(
        <div className="product-card-container">
        <img src={product.image} alt={product.name}/>
        <h2>{product.name}</h2>
        <Rating value={product.rating}/>
        <h4> from {product.numReviews} Reviews </h4>
        </div>
    )
}

export default ProductCard