import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "../../assets/icon";

const PestItemCard = ({item}) => {

    const navigate = useNavigate();

    return(
        <div className="border py-2 rounded-3 px-3 mt-3" onClick={() => navigate('/desises-info', { state: { pest : item } } )}>
            
            <div className="position-relative">
                <img src={item.image[0].image} width="300" height="220" className="d-block mx-auto rounded-3"/>
                <div className="position-absolute bg-white px-3 py-1" style={{top: '8px', left: '8px', borderRadius: '16px', color:'#2C689A', fontWeight:800}}>
                    {
                        item.pest_type === 'pest' ? (<span>آفات</span>) : null
                    }
                    {
                        item.pest_type === 'weed' ? (<span>علف هرز</span>)  : null
                    }
                    {
                        item.pest_type === 'bacteri' ? (<span>باکتری‌</span>)  : null
                    }
                    {
                        item.pest_type === 'virus' ? (<span>ویروس</span>) : null
                    }
                    {
                        item.pest_type === 'nutration' ? (<span>تغذیه</span>) : null
                    }
                </div>
            </div>
            
            <p className="page-description strong mt-3">
            {
                item.title
            }
            </p>

            <div className="d-flex justify-content-between">

                <div className="text-gray small pt-2">
                     english  name
                </div>

                <div className="btn-dark-blue-2">
                    <ArrowBackIcon/>
                </div>                
            </div>

        </div>
    )

}


export default PestItemCard;