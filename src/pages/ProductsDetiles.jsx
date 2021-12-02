import { Typography,makeStyles, Button } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetiles = (props) => {
    const { id } = useParams();
    console.log(id);
    const useStyles = makeStyles((theme) => ({
        detail:{
            backgroundColor : "white",
            margin: "3rem auto",
            width : "80%",
            padding : 80,
            display: "flex",
            alignItems : "center",
            justifyContent : "center",
            [theme.breakpoints.down("md")]:{
                width : "80%",
                padding : 20,
            }
        },
        detailFlex:{
            display : "flex",
            gap : 40,
            [theme.breakpoints.down("md")]:{
                flexDirection : "column",
                gap : 0,
            }
        },
        image:{
            width : 350,
            height: 300,
            objectFit : "cover",
            [theme.breakpoints.down("md")]:{
                width : "100%",
                marginBottom : 20,
            }
        },
        price:{
            margin: "1rem 0",
            backgroundColor : "#037269",
            padding : 13,
            width : 120,
            color : "white",
            display : "flex",
            alignItems : "center",
            justifyContent : "center",
            clipPath: "polygon(19% 0, 100% 0, 100% 100%, 19% 99%, 0 50%)",
            position : "relative"
        },
        circle:{
            width: "10px",
            height: "10px",
            backgroundColor : "white",
            position : "absolute",
            left : "14px",
            borderRadius : "50px"
        },
        owner:{
            padding: 10,
            backgroundColor: "#7777773e",
            color : "#835705",
            fontWeight : 600,
            border: "1px solid #00000034",
            marginBottom : 10,
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.detail}>
            <div className={classes.detailFlex}>
                <div>
                    <img 
                    className={classes.image}
                    src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00097f2522784e6d96b0aba400aa87a1_9366/Daily_3.0_Shoes_Grey_FW3270_01_standard.jpg" alt="nike" />
                </div>
                <div className="description">
                    <Typography variant="h5" style={{fontWeight : 800}}>
                        Nike Women's Air Force 1 Shadow
                    </Typography>
                    <div className={classes.price}>$200
                        <span className={classes.circle}></span>
                    </div>
                    <div className={classes.owner}>Men Shoes</div>
                        <Typography className={classes.description} variant="subtitle1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eos, ipsam modi dolorem 
                            quisquam veritatis nam nulla 
                            eum doloribus molestias laborum praesentium, exercitationem, soluta hic 
                            pariatur officia voluptate ducimus quia!
                        </Typography>
                    <Button variant="contained" color ="secondary"
                    style={{marginTop : 20}}
                    >Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetiles
