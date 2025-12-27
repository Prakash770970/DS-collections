import React,{useState} from 'react'
import './Cart.css';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
const[cartItems,setCartItems]= useState([
        {
            id:1,
            name:'Sneakers',
            price:3099,
            quantity:2,
            
        },
        {
            id:2,
            name:'nike',
            price:4990,
            quantity:2,  
        },
        {
            id:3,
            name:' Boots',
            price:2455,
            quantity:90,  

        },
           ]);
const handleCheckout = () => {
    alert('Thank you for your purchase!');
    setCartItems([]);
    navigate('/thank-you'); // Make sure this route is defined in your Router
  };


const calculateTotal=()=>{
    let total=0;
    cartItems.forEach((item)=>{
        total+=item.price * item.quantity;
    });
    return total.toFixed(2);
};
const handleRemoveItem= (id) =>{
    const updatedCartItems=cartItems.filter((item)=>item.id!==id);
    setCartItems(updatedCartItems);
};
const handleUpdateQuantity=(id,quantity)=>{
    const updatedCartItems=cartItems.map((item)=>{
        if(item.id==id){
            item.quantity=quantity;
        }
        return item;

    });
 setCartItems(updatedCartItems);
}
  return (
    <div className='cart'>
        <h1>Cart</h1>
        <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
            
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                />
              </td>
  <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${calculateTotal()}</p>
      <div className='color'>
      <button onClick={handleCheckout} disabled={cartItems.length === 0}>Checkout</button>
        </div>


    </div>
  
  
  )
}



export default Cart