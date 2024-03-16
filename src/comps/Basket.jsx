import React from "react";
import './Basketstyles.css';

function Basket(props){

  const calculatePrice = () => {
  let sum = 0
  for(let i in props.customerBasket.totalPrice){
     sum += props.customerBasket.totalPrice[i]
   }
   return sum
  }

    return(
        <div id='basket-container'>
          <h3>Your basket: </h3>
          <div id='selection-container'>
           {props.customerBasket.selection.map((selection) => {
            return(
            <h5 id='selection-title'>{selection}</h5>
             )
           })}
          </div>

          <div>
            <h3>Total Price: £{calculatePrice()}</h3>
          </div>
        </div>
    )
}

export default Basket;