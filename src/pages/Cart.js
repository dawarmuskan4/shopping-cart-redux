import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price , 0))
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (
          <div className="flex flex-row w-[1080px] mx-auto gap-x-10">
            <div>
              {
                cart.map((item,index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>
            
            <div className="flex flex-col justify-between h-[600px] w-[350px] -ml-[150px] mt-10">
              <div>
                <div className="text-green-500 font-bold text-2xl w-full">Your Cart</div>
                <div className="text-green-500 font-bold text-4xl w-full">Summary</div>
                <p className="font-bold mt-5 text-md">
                  <span>
                    Total items: {cart.length}
                  </span>
                </p>
              </div>

              <div>
                <p className=" mt-5 text-md">Total Amount : <span className="font-bold">${totalAmount}</span></p>
                <button 
                  className="text-white bg-green-500 rounded-full font-bold 
                    text-[12px] p-1 px-3 uppercase w-full h-[40px]
                  hover:bg-gray-700 
                  hover:text-white transition duration-300 ease-in"
                >Checkout Now</button>
              </div>
            </div>
          </div>
        ) :
        (
          <div>
            <h1>Cart Empty </h1>
            <Link to="/">
              <button>
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart
