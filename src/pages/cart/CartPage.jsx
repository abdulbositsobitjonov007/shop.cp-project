import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrease, deleteProduct, increase } from '../../app/cartSlice'

function CartPage() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <section className='pt-30 px-5'>
      <div className='container mx-auto'>
        <h1 className='text-[40px] font-bold '>Your cart</h1>
        <div className='flex flex-col lg:flex-row items-start w-full gap-5'>
          <div className='border border-[#c5c4c4] w-full p-7 rounded-[42px]'>
            {
              cart?.length > 0 ? (
                <div className=''>
                  {cart.map((el) => (
                    <div key={el.id}>
                      <div className='flex gap-5'>
                        <div className='max-w-22.5 sm:max-w-31 w-full h-22.5 sm:h-31 bg-[#cfcece] rounded-[9px]'>
                          <img className='w-full h-full object-contain p-5' src={el.image} alt="" />
                        </div>
                        <div className='flex w-full justify-between'>
                          <div className='flex flex-col max-w-70 w-full '>
                            <h1 className='text-[23px] line-clamp-2'>{el.title}</h1>
                            <p className=' line-clamp-1 text-[14px] font-extralight'>{el.description}</p>
                            <p className='text-[20px] font-bold'>${el.price}</p>
                          </div>
                          <div className='flex w-full flex-col justify-between items-end gap-2'>
                            <div>
                              <button onClick={() => dispatch(deleteProduct(el?.id))}><img src="/Frame (5).svg" alt="" /></button>
                            </div>
                            <div className='flex justify-between items-center max-w-32.5 h-11 w-full bg-[#ddd9d9] rounded-[62px]'>
                              <button onClick={() => dispatch(decrease(el.id))} className='max-w-10 w-full text-[25px] h-full cursor-pointer'>-</button>
                              <span>{el.qty}</span>
                              <button onClick={() => dispatch(increase(el.id))} className='max-w-10 w-full text-[25px] h-full cursor-pointer'>+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className='my-5 text-[#c5c4c4]' />
                    </div>
                  ))}
                </div>
              ) : (
                <div className='text-center py-20'>Your cart is empty.</div>
              )
            }
          </div>
          <div className='lg:max-w-125 w-full border border-[#c4c3c3] p-8 rounded-[42px]'>
            <h2 className='text-[25px] pb-5 font-bold'>Order Summary</h2>
            <div className='flex items-center justify-between'>
              <p className='text-[20px] font-extralight text-[#00000099]'>Subtotal:</p>
              <p className='text-[20px] font-bold
              '>${cart?.reduce((sum, item) => {
                sum += item.price * item.qty;
                return sum
              }, 0)}</p>
            </div>
            <hr className='my-5 text-[#00000049]'/>
            <div className='flex items-center justify-between'>
              <p className='text-[20px] font-extralight text-[#00000099]'>Total:</p>
              <p className='text-[20px] font-bold
              '>${cart?.reduce((sum, item) => {
                sum += item.price * item.qty;
                return sum
              }, 0)}</p>
            </div>
            <div className='pt-5'>
              <button className='w-full h-15 bg-black rounded-[62px] cursor-pointer text-white'>Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage