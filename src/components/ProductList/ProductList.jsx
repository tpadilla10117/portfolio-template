import React from "react";
import { Product } from '../../components/utils';
import { products } from '../data';
import './ProductList.css';

const ProductList = () => {
    return (
        <div className="productlist">
            <div className="productlist-texts">
                <h1 className="productlist-title">Create & inspire.  It's Turtles</h1>
                <p className="productlist-description">
                    Turtles is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more inside.
                </p>

            </div>
            <div className="productlist-list">
                {products.map( (item) => (
                    <Product img={item.img} key={item.id} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;