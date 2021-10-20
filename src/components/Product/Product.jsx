import React from 'react';
import Anthony from '../../assets/Anthony.png'
/* import Amazon from '../../assets/Amazon.png' */
import "./Product.css";

const Product = ( {img, link} ) => {
    return (
        <div className="product">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={Anthony} alt="" className="product-img" />
            </a>
        </div>
    );
};

export default Product;