import React from 'react';
import ProductSummary from './ProductSummary';

const ProjectList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-8 product-list section">
                    <h3 className="col-md-6 bg-warning" >Productos Destacados</h3>
                    <ProductSummary />
                </div >
            </div>
        </div>
    )
}

export default ProjectList;