import { CartAction } from "./ShowCart";
import { SelectProdAction } from "./SelectedProducts";

const sendCartData = (cart)=>{
  return async (dispatch) => {
    dispatch(CartAction.changeNotification({
      title: "pending",
      status: 'Sending ...',
      message: 'Sending Cart Data',
    }));

    const makeorder = async ()=>{
      const resp = await fetch("/makeorder",{
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(cart),
      });

      if(!resp.ok){
        throw new Error('Sending cart Data failed')
      }
    }

    try{
      await makeorder();
      dispatch(CartAction.changeNotification({
        title: "Successfull",
        status: 'success',
        message: 'Successfull Data Send',
      }));
    }
    catch{
      dispatch(CartAction.changeNotification({
        title: "Error",
        status: 'error',
        message: 'Data Not Sent',
      }));
    }
  };
};

const fetchCartData = ()=>{
  return async (dispatch)=>{
    const fetchdata = async ()=>{
      const resp = await fetch("/fetchdata");
      if(!resp.ok){
        throw new Error("Data cannot be fetched");
      }
      const data = await resp.json();
      return data;
    }

    try{
      const data = await fetchdata();
      dispatch(SelectProdAction.setcart({
        totalamount: data.body[0].totalAmount,
        selectedproducts: [...data.body[0].items],
      }));
      dispatch(CartAction.changeNotification({
        title: "Successfull",
        status: 'success',
        message: 'Successfull Data Recieved',
      }));
    }
    catch(error){
      dispatch(CartAction.changeNotification({
        title: "Error",
        status: 'error',
        message: 'Data Not Recived',
      }));
    }
  }
};

export {fetchCartData};
export default sendCartData;