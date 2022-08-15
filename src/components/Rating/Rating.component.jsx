import './Rating.styles.scss';
const Rating = ({value})=>{
    return(
    <div>
    {[...Array(5)].map((star,index)=>{
        return <span><i className={value>=index+1?"fa-solid fa-star":value>=index+0.5?"fa-solid fa-star-half-stroke":"fa-regular fa-star"}/></span>
    })}
    </div>
    )
}

export default Rating