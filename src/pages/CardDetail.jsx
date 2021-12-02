import { makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'
import { ProductState } from '../context/Context.config';
import Card from './Card';

const CardDetail = () => {
    const {productState, totalPrice,} = ProductState();
    const product = productState.product;

    const useStyles = makeStyles((theme) => ({
        total:{
            flex: 2,
            backgroundColor : "#dfdfdf",
            padding : 20,
            borderRadius : "5px"
        },
        container:{
            margin: 20,
            display : "flex",
            flexDirection : "row-reverse",
            gap : 15,
            [theme.breakpoints.down("md")]:{
                display : "flex",
                flexDirection : "column",
            },
        },
        product:{
            display : "flex",
            flexDirection : "column",
            flex : 4,
            height: 200,
        },
    }));
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.total}>
                <Typography variant="h6">
                    List of Items : ({product.length})
                </Typography>
                <Typography variant="subtitle1" style={{padding : "0.8rem 0"}}>
                    Your Total Price is : $ {totalPrice(product)}
                </Typography>
                <Button variant="contained" fullWidth style={{marginTop:20,}} color = "secondary">
                    Proceed the Payment 
                </Button>
            </div>
        <div className={classes.product}>
        {product.map((item) => {
            return (
                <div >
                    <Card key={item.id}
                        id={item.id}
                        title ={item.title}
                        image = {item.image}
                        rating ={item.rating}
                        disc = {item.disc}
                    />
                </div>
            );
        })}
        </div>
        </div>
    );
}

export default CardDetail
