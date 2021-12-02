import { AppBar, Badge, Container, makeStyles, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ProductState } from '../context/Context.config';

const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const { productState } = ProductState();


    const useStyles = makeStyles((theme) => ({
    
        logo:{
            textTransform : "uppercase",
            fontWeight : 600,
            cursor : "pointer"
        },
        nav:{
            textTransform : "uppercase",
            fontWeight : 500
        },
        container:{
            display : "flex",
            justifyContent : "space-between",
            alignItems : "center"
        },
        input:{
            display : "flex",
            alignItems : "center"
        }
    }));

    const classes = useStyles();
    return (
        <AppBar color ="inherit"
        style={{padding : 20}}
        position="static"
        >
            <Container className={classes.container}>
                <Typography variant="h5" className={classes.logo}
                onClick={() => navigate('/')}
                >
                    online store
                </Typography>
                <Typography variant="subtitle1" className={classes.nav}>
                    <span style={{marginRight : 15, cursor : "pointer"}}>shop</span>
                    <span style={{marginRight : 15, cursor : "pointer"}}>blog</span>
                    <span style={{marginRight : 15, cursor : "pointer"}}>portfolio</span>
                </Typography>
                <Typography className={classes.input}>
                    {open ? <input type="text" placeholder="search..."
                    style={{padding : "0.3rem", border: "none", 
                    borderBottom : "1px solid #000", outline : "none"}}
                    /> : ""}
                    <span style={{cursor : "pointer"}}><SearchIcon onClick={() => setOpen(!open)}/></span>
                    <Badge badgeContent={productState.product.length} color="primary">
                    <span onClick={() => navigate('/card')} style={{marginLeft:20, cursor : "pointer"}}>
                        < ShoppingCartIcon/>
                    </span>
                    </Badge>
                    <span style={{marginLeft:20, cursor : "pointer"}}><AccountCircleIcon/></span>
                </Typography>
            </Container>
        </AppBar>
    )
}

export default Header
