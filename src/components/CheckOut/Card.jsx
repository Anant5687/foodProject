import React, { useState } from 'react'
import style from './CheckOut.module.css'
import { removeItem } from '../../counterSlice/orderSlice'

const Card = ({ ele }) => {
  const [quantity, setQuantity] = useState(0)
  const [alert, setAlert] = useState('')
  const addHandeler = () => {
    if (quantity >= 10) {
      setAlert("You are not able to add more items")
    } else {
      setQuantity(quantity + 1)
      setAlert('')
    }
  }
  const fullRemoveHandeler = (x) =>{
    dispatchEvent(removeItem(x))
  }
  const removeHandeler = () => {

    if (quantity <= 1) {
      setAlert("This is minimum requirement for placing this order")
    } else {
      setQuantity(quantity - 1)
      setAlert('')
    }
    
  }

  return (
    <>

      <div className={style.card} >
        <div className={style.main}>
          <span>
            <img className={style.img} src={ele.url} />
            <h3 align="center" >MRP: Rs {ele.price}</h3>

            <button
              onClick={addHandeler}
              className={style.button} >Add</button>
            <b className={style.value}>{quantity}</b>
            <button onClick={removeHandeler}
              className={style.button2}>Remove</button>    <br />
            <p style={{ color: "red" }}>{alert}</p><br /><br />
            <button onClick={()=>fullRemoveHandeler()} className={style.Remove_cart}>Remove from cart</button>
          </span>
        </div>
      </div>
    </>
  )
}

export default Card
