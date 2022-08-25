import React from "react";
import './pest.css';
import Grid from '@mui/material/Grid';

const PestProductCard = (props) => {
    
    return(
        <Grid key={props.product.guid} sx={{ width : { xs : "32%" }}} className={props.selectedProduct.guid === props.product.guid ? 'pest-product-card-box-selected' : 'pest-product-card-box'}>
            <div onClick={() => props.setSelectedProduct(props.product)}>
                <div className="d-flex justify-content-center">
                    <img src={'http://185.141.107.246:8000' + props.product.image} className='' width={80} height={80}/>
                </div>
                <div className={props.selectedProduct.guid === props.product.guid ? "pest-product-card-title-selected" : "pest-product-card-title"}>
                    <p className="py-1 small">
                        {props.product.title}
                    </p>
                </div>
            </div>
        </Grid>
    );

}

export default PestProductCard;