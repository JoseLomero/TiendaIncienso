import React from 'react';
import CategoryDetail from './CategoryDetail';

const Categories = () => {
    return (
        <div className="container  border border-dark rounded-pill col-9 my-3 p-4 bg-info">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Categorias Destacadas</h5>
                </div>
                <div className="row">
                    <CategoryDetail />
                </div>

            </div>
        </div>
    )
}

export default Categories;