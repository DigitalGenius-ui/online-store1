import { Box, List, ListItem, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import { ProductState } from '../context/Context.config';

const Card = ({id, title, image, rating, disc}) => {
    const { productDispatch } = ProductState();
    const removeItem = () => {
        productDispatch({
            type: "DELETE_ITEM",
            payload: id,
        })
    }
    const useStyles = makeStyles((theme) => ({
        list:{
            display : "flex",
            alignItems :"start",
            gap : 15,
            [theme.breakpoints.down("xs")]:{
                display : "flex",
                flexDirection : "column-reverse",
            },
        },
        disc:{
            fontWeight : 400,
            fontSize : 14,
        },
        star:{
            display : "flex",
            marginTop : 10,
            fontSize : "0.8rem"
        },
        photo : {
            width : 200,
            [theme.breakpoints.down("xs")]:{
                width : "100%"
            },
        },
        product : {
            display : "flex",
            flexDirection : "column",
            marginBottom : 15
        }
    }));
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.product}>
               <Box sx={{ bgcolor: '#dfdfdf',borderRadius : "5px" }} >
                 <List >
                   <ListItem className={classes.list}>
                       <div>
                        <img 
                       className={classes.photo}
                       src={image} alt={title} />
                       </div>
                       <div>
                            <Typography variant="h6" style={{padding : "0 0 0.8rem 0"}}>
                                {title}
                            </Typography>
                            <span className={classes.disc}>{disc}</span>
                            <div className={classes.star}>
                                {Array(rating).fill().map((_, i) => {
                                    return <p>⭐</p>
                                })}
                            </div>
                            <Button variant="contained" color = "secondary"
                            style={{marginTop : 20}}
                            onClick={removeItem}
                            >
                            Remove Item
                            </Button>
                       </div>
                   </ListItem>
                 </List>
               </Box>
            </div>
        </div>
    );
}

export default Card
