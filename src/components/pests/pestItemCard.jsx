import { ArrowBackIcon } from "../../assets/icon";

const PestItemCard = ({item}) => {

    return(
        <div className="border py-2 rounded-3 px-3 mt-3">
            <img src={item.image[0].image} width="300" height="220" className="d-block mx-auto rounded-3"/>
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