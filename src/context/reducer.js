export const initialState = {
    product : []
}

const reducer = (state,action) => {
    switch (action.type) {
        case "ADD_ITEM" :
            return {
                ...state,
                product :[...state.product, action.payload]
            }
        case  "DELETE_ITEM":
        const newProduct = [...state.product]
        const index = state.product.findIndex((productId) => productId.id === action.payload);
        if(index >= 0) {
            newProduct.splice(index,1);
        }else{
            console.log(`cant fine the ${action.payload}`);
        }
            return {
                ...state,
                product : newProduct
            }
        default:
            return state;
    }
}

export default reducer