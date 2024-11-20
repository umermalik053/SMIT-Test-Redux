
const Value = {
    Product: []
}

export const ProductReducer = (state=Value, {type,payload})=>{
    switch(type){
        case 'ADD_ITEM':
            return {Product:[...state.Product , ...payload]};
        default:
             return state;
    }
}