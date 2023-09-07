import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from "./components/Notifications/Notification.js";
import sendCartData from './components/Redux/Slices/Cart-actions';
import { fetchCartData } from './components/Redux/Slices/Cart-actions';

let flag=0;


function App() {
  const dispatch = useDispatch();

  const CartShow = useSelector((state)=>{
    return state.showCart.ShowCart;
  });

  const allcart = useSelector((state)=>{
    return state.selectedProducts;
  });

  const currmess = useSelector((state)=>{
    return state.showCart.ShowProgress;
  });

  // const changemessage = (mystatus,mytitle,mymessage)=>{
  //   dispatch(CartAction.changeNotification({
  //     title: mytitle,
  //     status: mystatus,
  //     message: mymessage,
  //   }));
  // }

  // Type-1 To save the data in the backend through Component
  // useEffect(()=>{
  //   if(flag===0){
  //     flag=1;
  //     return;
  //   }
  //   changemessage("Sending Data","Sending...","Sending Data to Cart");
  //   const makeorder = async ()=>{
  //     const resp = await fetch("/makeorder",{
  //       method: "POST",
  //       headers: {
  //         'Content-Type': "application/json",
  //       },
  //       body: JSON.stringify(allcart),
  //     });

  //     if(!resp.ok){
  //       throw new Error('Sending cart Data failed')
  //     }

  //     changemessage("success","Success","Successfully data sent");
  //   }
    
  //   makeorder().catch((error)=>{
  //     changemessage("error","Error","Sending Data failed");
  //   });

  // },[allcart]);



  // Type-2:- Other way is to do through making personalized action creator.
  useEffect(()=>{
    if(flag===0){
      flag=1;
      dispatch(fetchCartData());
      return;
    };
    dispatch(sendCartData(allcart));
  },[allcart,dispatch]);

  
  return (
    <>
      {currmess.visible && <Notification status = {currmess.status} title = {currmess.Title} message = {currmess.message} />}
      <Layout>
        {CartShow===true && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
