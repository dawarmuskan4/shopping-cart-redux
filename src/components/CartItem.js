import React from 'react'
import toast from 'react-hot-toast';
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item removed from cart")
  }
  return(
    <div className="mt-20 ">
      <div className="flex flex-row w-[800px] items-center justify-between h-[200px] gap-x-4">
        
        <div>
          <img src={item.image} alt="" className="w-[150px]"/>
        </div>
        
        <div className="w-3/4 flex flex-col py-4 gap-y-6">
          <h1 className="text-gray-700 font-semibold text-xl text-left w-80 mt-1">{item.title}</h1>
          <h1 className="w-80 text-gray-400 font-normal text-[20px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          
          <div className="flex flex-row gap-x-80">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase fontSize={30}/>
            </div>
          </div>

          <div class="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

        </div>

      </div>
    </div>
  )
};

export default CartItem;
