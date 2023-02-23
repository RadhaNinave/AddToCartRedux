import { createSlice } from "@reduxjs/toolkit"

const initialCartState= {isCartShow:false}

const ShowCart = createSlice({
     name :'ShowCart',
     initialState: initialCartState,
     reducers :{
        show(state)
        {
           state.isCartShow =!state.isCartShow;
        },
    hide(state)
    {
        state.isCartShow=false;
    }
}
     
})
export const ShowCartAction =ShowCart.actions 
export default ShowCart.reducer