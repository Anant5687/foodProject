import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const NewCard = () => {
  const orderedItem = useSelector(ele => ele.order.orderedItem)
  const checkoutHandeler = () => {
    if (orderedItem.length <= 2) {
      alert("This order is not place because your thalli is having less than 2 items")
    } else {
      alert("This order is placed")
    }
  }
  return (
    <div>

      <h1 align="center">Your plate is here....</h1>
      {orderedItem.map((ele, i) => {
        return (
          <Card ele={ele} index={i}/>
        )
      })}
      <h3 style={{ marginLeft: "75%" }}> Total price :- </h3>
      <Button style={{ marginLeft: "80%" }} variant='contained'
        onClick={checkoutHandeler}>
        Checkout
      </Button>
    </div>
  )
}

export default NewCard
