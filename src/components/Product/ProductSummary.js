import React from 'react';
import Conos from '../../img/products/incienso_conos.jpg';
import Espiral from '../../img/products/incienso_espiral.jpg';
import Sandalo from '../../img/products/incienso_sandalo.jpg';
import Agarwood from '../../img/products/incienso_agarwood.jpg';
import Golden from '../../img/products/incienso_golden.jpg';
import Goloka from '../../img/products/incienso_goloka.jpg';
import PaloSanto from '../../img/products/incienso_palosanto.jpg';
import Salvia from '../../img/products/incienso_salvia.jpg';
import Resina from '../../img/products/incienso_resina.jpg';
import './Product.css';

const ProductSummary = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Conos Aromáticos</span>
                            <img src={Conos} className="product-img" alt="" />
                            <p className="text-center">10€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Espiral de Incienso</span>
                            <img src={Espiral} className="product-img" alt="" />
                            <p className="text-center">5€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Sándalos</span>
                            <img src={Sandalo} className="product-img" alt="" />
                            <p className="text-center">15€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Incienso Agarwood</span>
                            <img src={Agarwood} className="product-img" alt="" />
                            <p className="text-center">13€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Inciensos NagHandan</span>
                            <img src={Golden} className="product-img" alt="" />
                            <p className="text-center">20€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Inciensos Goloka</span>
                            <img src={Goloka} className="product-img" alt="" />
                            <p className="text-center">16€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Pack Palo Santo (15u)</span>
                            <img src={PaloSanto} className="product-img" alt="" />
                            <p className="text-center">7€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Pack Resinas (25u)</span>
                            <img src={Resina} className="product-img" alt="" />
                            <p className="text-center">10€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 redondeado m-1">
                    <div className="card z-depth-0 product-summary row justify-content-center">
                        <div className="card-content bg-white">
                            <span className="card-title text-center">Herbal Salvia Aromático</span>
                            <img src={Salvia} className="product-img" alt="" />
                            <p className="text-center">7€</p>
                            <p>Descripción</p>
                        </div>
                    </div>
                </div>
            
            {/* Aqui termina el row */}
            </div>
        </div>
    )
}

export default ProductSummary;