import { useContext } from "react";
import { dataContext } from "./DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
 
  export const CartContent = ()=> {
    const {cart} = useContext(dataContext);

     
    return (
        <>
        <div>CartConten</div>
        <CartElements />
        <CartTotal/>
        </>
    );
 };

