import PestBreadCrumb from './../../components/pests/pestBreadCrumb';
import PestProductCard from './../../components/pests/PestProductCard';
import { PestQuestionNewIcon } from './../../assets/pestIcons/pestQuestionsNewIcon';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const PestQuestionsPage = () => {
    
    const navigate = useNavigate();
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
            is_last: false
        },
        {
            path: '',
            title: 'پرسش و پاسخ',
            is_last: true
        }
    ]
    return(
        <div className="page-container container-fluid">
            

            <PestBreadCrumb data={menuList}/>
            <div className='mt-3 mx-2'>
                <PestProductCard product={pestProduct.product[0]} selectedProduct={pestProduct.product[0]}/>
            </div>

            <hr/>
    
            <div className='d-flex justify-content-center'>
                <PestQuestionNewIcon/>
            </div>

            <h6 className='text-center' style={{fontWeight:800}}>
            پرسش و پاسخ
            </h6>
            <p className='page-description px-4 small'>
            در این بخش به تعداد محدودی سوال پاسخ خواهید داد و ما با توجه به پاسخ شما آفات، بیماری‌ها و یا دیگر عوامل  مشابه با خسارت وارد شده به محصولتان  را به شما معرفی خواهیم کرد.
            </p>
            
            <div className='px-3 mt-4'>
                <button className='btn-dark-blue w-100 ' onClick={() => navigate('/add-cultivation')}> 
                    شروع
                </button>
            </div>

        </div>
    )
}


export default PestQuestionsPage;