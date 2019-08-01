import React from 'react';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut fugiat</p>
                </div>
                <div className="card-action">
                    <div>Precio</div>
                    <div>Descripción</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
