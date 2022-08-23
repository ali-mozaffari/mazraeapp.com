import { PestNullProductsIcon } from './../../assets/pestIcons';
import { useNavigate } from 'react-router-dom';

const PestNullProducts = () => {

    const navigate = useNavigate();
    return(
        <div>
            <p className='page-title'>
            کلینیک مزرعه
            </p>
            <hr/>
            <div className="d-flex justify-content-center">
                <PestNullProductsIcon/>
            </div>
            <p className='page-description px-4'>
            با ثبت کشت، می‌توانید آفات، بیماری‌ها، علف‌های هرز و مشکلات تغذیه‌ای مربوط به محصولات خود را بررسی کنید و راه پیشگیری و درمان آن را دریافت کنید. 
            </p>

            <div className='px-3 mt-4 mb-3'>
                <button className='btn-dark-blue w-100 ' onClick={() => navigate('/add-cultivation')}> 
                    افزودن کشت  
                </button>
            </div>
        </div>
    );

}

export default PestNullProducts;