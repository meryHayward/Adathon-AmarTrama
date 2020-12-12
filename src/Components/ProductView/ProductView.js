import React from "react";
import './ProductView.scss';
import Product from "../Search/Search";
import from "../Button/Button";

const ProductView = () => {
    return (
        <React.Fragment>
            <h1>Tu comunidad tiene los siguientes productos solicitados:</h1>
            <ProductList />
        </React.Fragment>
    )
};

export default ProductView;

