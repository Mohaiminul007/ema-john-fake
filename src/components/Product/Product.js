import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product.name)
    const {name, img, seller, price, ratings} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>seller: {seller}</small></p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>
                <p>Add To Card</p>
            </button>
        </div>
    );
};

export default Product;