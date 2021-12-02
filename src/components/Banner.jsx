import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const Banner = () => {
    const useStyles = makeStyles((theme) => ({
        banner:{
            backgroundImage: `linear-gradient(#00000090, #00000090),url(https://cdn.denimandcloth.com.au/content/uploads/2014/11/18121834/adidas-banner.jpg);`,
            width: "100%",
            height: "50vh",
            backgroundPosition:"bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize : "cover",
            display : "flex",
            alignItems:"center",
            justifyContent : "center"
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Typography variant="h3" style={{textTransform : "uppercase", color :"white"}}>
                Products
            </Typography>
        </div>
    )
}

export default Banner
