import React, { Component } from 'react';
import Categories from './Categories/CategoryList';
import ProductList from '../../Product/ProductList';

class MainPage extends Component {
    state = {}
    render() {
        return (
            <div className="mainpage container">
                <div className="row justify-content-md-center">
                    <div className="col sm12 md12">
                        <Categories />
                    </div>
                </div>
                <div className="row">
                    <ProductList />
                </div>
            </div>
        );
    }
}

export default MainPage;