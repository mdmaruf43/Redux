import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../Redux/Actions/CartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h2>This is Shop</h2>
            {
                products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);

//connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);