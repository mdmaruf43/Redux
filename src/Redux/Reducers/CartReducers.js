import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/CartActions";

const initialState = {
    cart: [],
    products: [
        {name: 'Samsung Laptop', id: 1},
        {name: 'Dell', id: 2},
        {name: 'HP', id: 3},
        {name: 'Asus', id: 4},
        {name: 'Apple', id: 5}
    ]
}

export const cartReducers = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart}
            // return {
            //     ...state,
            //     cart: [...state.cart, action.id, action.name, state.cart.length + 1]
            // }
        case REMOVE_FROM_CART:
            const id = action.id;
            const remaingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remaingCart}
        default: 
            return state;
    }
}