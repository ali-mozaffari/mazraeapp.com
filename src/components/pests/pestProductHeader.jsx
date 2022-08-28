import PestBreadCrumb from './pestBreadCrumb';
import PestProductCard from './PestProductCard';
import { useDispatch, useSelector } from "react-redux";

const PestProductHeader = () => {

    const pestProduct = useSelector((state) => state.pestProduct)

    const menuList = [
        {
            path: '/desises',
            title: 'کلینیک مزرعه',
            is_last: false
        },
        {
            path: '',
            title: pestProduct.product[0].title,
            is_last: true
        }
    ]

    return(
        <div className='pb-4'>
            
            <PestBreadCrumb data={menuList}/>

            <div className='mt-3 mx-2'>
                <PestProductCard product={pestProduct.product[0]} selectedProduct={pestProduct.product[0]}/>
            </div>

        </div>
    )

}

export default PestProductHeader;
