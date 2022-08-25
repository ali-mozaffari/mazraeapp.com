import React, { useState, useEffect } from "react";
import PestNullProducts from '../../components/pests/PestNullProducts';
import { getFarmList } from "../../redux/slice/farm/farmListBox";
import { useDispatch, useSelector } from "react-redux";
import { da } from "date-fns/locale";
import PestProductsList from "../../components/pests/PestProductsList";

const PestMainPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getFarmList());
    }, []);

    const [ products, setProducts ] = useState([])  
    const farmlist = useSelector((state) => state.farmlist.postList);
  
    var data = []
    useEffect(() => {
        farmlist.map((item) => {
            if(item.cultivation.length > 0){
                item.cultivation.map((cul) => {
                    data.push(cul.mahsul)
                })
            }
        })

        var uniqueArray = data.reduce((filter, current) => {
            var dk = filter.find(item => item.guid === current.guid);
            if (!dk) {
              return filter.concat([current]);
            } else {
              return filter;
            }
          }, []);
        setProducts(uniqueArray)

    }, [])

    return(
        <div className="page-container container-fluid mb-5">
            {
                products.length > 0 ? (
                    <PestProductsList products={products}/>
                ) : (
                    <PestNullProducts/>
                )
            }
        </div>
    );
}

export default PestMainPage;