import { useParams } from 'react-router-dom';
import './ProductDetails.styles.scss';
import products from '../../products';
import Rating from '../Rating/Rating.component';
const ProductDetails = ()=>{
    const {id} = useParams();
    const product = products.find((p)=>p._id===id);

return(
    <div className="product-details-container-parent">
    <div className='product-details-container'>
    <button>
    Go Back
    </button>
    <div className='product-details'>
    <img src={product.image} alt={product.name}/>
    <div className='product-description'>
    <h1>{product.name}</h1>
    <Rating value={product.rating}/>
    <h3>price: ${product.price}</h3>
    <p>{product.description}</p>
    </div>
    <div className='product-status'>
    <div className='space'><span>Price:</span><span>{product.price}</span></div>
    <div className='space'><span>Price:</span><span>{product.countInStock>=1?"In Stock":"Out of Stock"}</span></div>
    <button>Add To Cart</button>
    </div>
    </div>
    </div>
    </div>
    )
}

export default ProductDetails