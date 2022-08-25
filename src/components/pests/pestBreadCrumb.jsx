import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ArrowBackNewIcon } from './../../assets/pestIcons/arrowBackNew'



export default function BreadcrumbExample({data}) {

    const navigate = useNavigate();
    

    return (
        <div role="presentation" className='d-flex justify-content-between' style={{marginRight: '12px', marginTop: '8px'}}>
            <Breadcrumbs aria-label="breadcrumb">
                {
                    data.map((item) => 
                        <a onClick={() => navigate(item.path)} style={item.is_last ? {fontWeight:800 , color: 'black'} : {fontSize:'14px'}}>
                            {item.title}
                        </a>
                    )
                }
            </Breadcrumbs>

            <span style={{marginLeft: '12px'}} onClick={() => navigate(-1)}>
                <ArrowBackNewIcon/>
            </span>
        </div>
    );
}
