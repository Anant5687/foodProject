import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../../../counterSlice/orderSlice';



const Food = () => {
   const selector =  useSelector((ele)=>ele.chappati.data)
   

   console.log(selector)
const dispatch = useDispatch()
  const handleOnClick = (x) => {
    // alert('Data Added')
    dispatch(addItem(x))
  }
  return (

    <Card sx={{ maxWidth: 345, marginTop: 2, marginLeft: 2 }}>
      {selector.map((ele, i) => {
        return (<>
          <CardMedia
            component="img"
            height="194"
            image={ele.url}
            alt="Paella dish"
            key ={i}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 15, fontSize: "20px" }}>
              <b>{ele.Name}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {ele.description}
            </Typography>
          </CardContent>
          <Button variant='contained'
            onClick={()=>handleOnClick(ele)} sx={{ marginLeft: 1, marginBottom: 1 }}>
            Add to cart
          </Button>
        </>)

      })}

    </Card>
  );
}


export default Food;
