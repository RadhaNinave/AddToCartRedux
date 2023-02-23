import { cartAction } from "./Cart";
import { ShowCartAction } from "./Show";


export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        ShowCartAction.showNotification({
          status: "pending",
          title: "Sending ...",
          message: "Sendding Cart data",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          `https://expensetracker-1498c-default-rtdb.firebaseio.com/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error("Sending cart data Failed");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          ShowCartAction.showNotification({
            status: "Success",
            title: "Success!",
            message: "Sendding Cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          ShowCartAction.showNotification({
            status: "error",
            title: "Error!",
            message: "Sendding Cart data failed",
          })
        );
      }
    };
  };


export const fetchCartData=()=>{
    return async dispatch =>{
        const fetchData=async()=>{
            const response = await fetch(
                `https://expensetracker-1498c-default-rtdb.firebaseio.com//cart.json`
              );
        
              if (!response.ok) {
                throw new Error("Could not fetch cart data");
              }

              const data = await response.json()

              return data;
        }

        try{
            const cartData =await fetchData()
            dispatch(cartAction.replaceCart(cartData))

        }catch(error){
            dispatch(
                ShowCartAction.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching Cart data failed",
                })
              );
        }
    }
}  