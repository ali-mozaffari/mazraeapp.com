import PestProductCard from './PestProductCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { addPestProduct } from '../../redux/slice/pests/pestProduct';

const PestProductsList = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pestProduct = useSelector((state) => state.pestProduct)

    const [ selectedProduct , setSelectedProduct ] = useState([]);

    

    useEffect(() => {

        dispatch(addPestProduct(selectedProduct));
        if (selectedProduct.guid) {
            navigate('/desises-menu')   
        }

    }, [selectedProduct]);

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


            
            <p className='page-title mt-4'>
            تاریخچه جستجو
            </p>
            <hr/>
            
            <p className='page-description text-center py-5'>
                یافت نشد
            </p>

        </div>
    );

}

export default PestProductsList;