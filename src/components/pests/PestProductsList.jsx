import { PestNullProductsIcon } from './../../assets/pestIcons';
import { useNavigate } from 'react-router-dom';
import config from '../../services/config';
import PestProductCard from './PestProductCard';

import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { useState } from 'react';

const PestProductsList = (props) => {


    const [ selectedProduct , setSelectedProduct ] = useState('');

    return(
        <div>
            <p className='page-title'>
            کلینیک مزرعه
            </p>
            <hr/>
            
            <p className='page-description text-end'>
            محصول مورد نظر خود را انتخاب کنید.
            </p>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container justifyContent={'space-between'}>
                    {
                        props.products.map((product) => (
                            <PestProductCard product={product} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
                        ))
                    }
                </Grid>             
            </Box>

        </div>
    );

}

export default PestProductsList;