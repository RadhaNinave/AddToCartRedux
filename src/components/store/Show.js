import { createSlice } from "@reduxjs/toolkit"

const initialCartState= {isCartShow:false,notification: null}

const ShowCart = createSlice({
     name :'ShowCart',
     initialState: initialCartState,
     reducers :{
        show(state)
        {
           state.isCartShow =!state.isCartShow;
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message,
            };
          },
   
}
     
})
export const ShowCartAction =ShowCart.actions 
export default ShowCart.reducer