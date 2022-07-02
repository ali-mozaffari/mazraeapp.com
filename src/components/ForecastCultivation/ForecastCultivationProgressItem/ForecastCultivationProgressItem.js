import React, {useEffect, useState} from "react";
import propTypes from 'prop-types';

import {useNavigate} from 'react-router-dom';

import './ForecastCultivationProgressItem.css';
import {CONST} from "../../../assets/Const";

const COLORS = [
    '#f9a825',
    '#558b2f',
    '#fdd835',
    '#d84315',
    '#5d4037',
    '#01579b',
    '#6a1b9a',
    '#ec407a',
]

ForecastCultivationProgressItem.propTypes = {
    title: propTypes.string,
    data: propTypes.object.isRequired,
    all: propTypes.bool,
    farm: propTypes.object,
    year_id: propTypes.number,
    main: propTypes.bool,
    level: propTypes.number,
    onAyeshClick: propTypes.number,
    mahsulKey: propTypes.string,
    isItem: propTypes.bool,
    notShowMasahat: propTypes.bool,
}

function ForecastCultivationProgressItem(props) {
    const {data, title, all, farm, year_id, main, level, onAyeshClick, mahsulKey, isItem, notShowMasahat} = props;
    const navigate = useNavigate()
    const [isAyesh, setIsAyesh] = useState(false)
    const [tooltip, setTooltip] = useState('')

    const _mahsulKey = mahsulKey || 'mahsuls'

    const isLevelOneProgress = level === 1 || data[_mahsulKey].length === 0 || !level

    let cultivationAllMasahat = 0
    let cultivationAllMasahatPercent = 0
    data[_mahsulKey].forEach(item => {
        cultivationAllMasahat += item.masahat
        cultivationAllMasahatPercent += Math.round((item.masahat * 100) / data.masahat)
    })
    const ayeshMasahat = data.masahat - cultivationAllMasahat
    const ayeshMasahatPercent = 100 - cultivationAllMasahatPercent
    let cultivationData = data[_mahsulKey]
    if (ayeshMasahatPercent > 0) {
        cultivationData = [...data[_mahsulKey], {
            title: isLevelOneProgress ? 'آیش' : '',
            color: isLevelOneProgress ? '#d1d1d1' : '#ffffff',
            masahat: ayeshMasahat,
            masahatPercent: ayeshMasahatPercent,
        }]
    }

    let timeout

    useEffect(() => {
        farm?.ayesh_sal.forEach(item => {
            if (item.id == year_id) {
                setIsAyesh(true)
            }
        })
    }, [])

    useEffect(() => {
        if (tooltip) {
            timeout = setTimeout(() => {
                setTooltip('')
            }, 2000)
        }
    }, [tooltip])

    return (
        <div className='row' style={{
            ...isLevelOneProgress
                ? !isItem ? {'padding': '15px 0 0 0', 'border-top': '1px solid #80808047'} : {}
                : {'margin-top': '-30px'}
        }}>

            {!isItem && (
                <div className='col-md-3 col-8'>
                    {!all && isLevelOneProgress && (
                        <div>
                            <button disabled={data[_mahsulKey].length}
                                    className={`${isAyesh ? 'active-button-farm' : ' default-button-farm'}`}
                                    onClick={() => {
                                        if (!data[_mahsulKey].length) {
                                            onAyeshClick()
                                        }
                                    }}>
                                کاملا آیش
                            </button>
                            <button
                                className={`${data[_mahsulKey].length ? 'active-button-farm' : 'default-button-farm'}`}
                                onClick={() => navigate(`/add-new-cultivation/${farm.id}/${farm.name}/${farm.guid}/${year_id}`)}>
                                ثبت کشت
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div className='col-md-2 col-4  low-res'>

                <span className='top-title'>
                    {title}
                </span>

                {(all && !notShowMasahat) && (
                    <span className='hektar-farm'>
                        {data.masahat.toFixed(2)}
                        {'هکتار'}
                    </span>
                )}

                {!isItem && (
                    <span className='sal-farm'>
                        {main ? '' : all ? 'سال زراعی' : 'الگوی کشت سال'}

                        {(all && !main) ? '1397-1400' : ''}

                        {!all && data.years.map(item => {
                            return (
                                <div>
                                    {item}
                                </div>
                            )
                        })}
                    </span>
                )}

            </div>

            <div className={`${!isItem ? 'col-md-7' : ''} col-12`}>
                {cultivationData.map((item, index) => {
                    const masahatPercent = Math.round((item.masahat * 100) / data.masahat)

                    return (
                        <div className='progress-complete'
                             style={{width: `${item.masahatPercent || masahatPercent}%`}}>
                            <div className='progress-complete'
                                 style={{width: '100%'}}>

                                {/*<span className='farm-percent'> {item.title}*/}
                                {/*    {parseInt((item.masahat * 100) / data.masahat)}*/}
                                {/*    /!*{item.masahat}*!/*/}
                                {/*    {'%'}</span>*/}

                            </div>
                            <div className='progress-part'
                                 style={{backgroundColor: item.color || COLORS[index]}}
                                 title={`${item.title} ${item.masahatPercent || masahatPercent} %`}
                                 onClick={() => {
                                     let _left = 0
                                     for (let i = 0; i < index + 1; i++) {
                                         const element = cultivationData[i]
                                         if (i !== index) {
                                             _left += Math.round((element.masahat * 100) / data.masahat)
                                         }
                                     }

                                     clearTimeout(timeout)

                                     setTooltip({
                                         title: `${item.title} ${item.masahatPercent || masahatPercent} %`,
                                         left: `${_left}%`
                                     })
                                 }}>

                            </div>
                        </div>
                    )
                })}

                {tooltip && (
                    <span className='cul-tooltip' style={{'left': tooltip.left}}>
                        {tooltip.title}
                    </span>
                )}

                {!isItem && cultivationData.map((item, index) => {
                    const masahatPercent = Math.round((item.masahat * 100) / data.masahat)

                    return (
                        <div className='progress-complete-2'>

                            <span className='culti-circle-percent'
                                  style={{backgroundColor: item.color || COLORS[index]}}/>

                            {item.title && (
                                <span className='farm-percent'>
                                    <div className='color-circle' style={{'background-color': item.color,}}>

                                    </div>
                                    {' '}
                                    {item.title}
                                    {' '}
                                    {item.masahatPercent || masahatPercent}
                                    {/*{item.masahat}*/}
                                    {'%'}


                                </span>
                            )}

                        </div>
                    )
                })}
            </div>

            <div className='col-md-2  high-res'>

                <span className='top-title'>
                    {title}
                </span>

                {(all && !notShowMasahat) && (
                    <span className='hektar-farm'>
                        {data.masahat.toFixed(2)}
                        {'هکتار'}
                    </span>
                )}

                {!isItem && isLevelOneProgress && (
                    <span className='sal-farm'>
                        {main ? '' : all ? 'سال زراعی' : 'الگوی کشت سال'}

                        {(all && !main) ? CONST.LAST_YEAR_TITLE : ''}

                        {!all && main !== true && data.years.map(item => {
                            return (
                                <div>
                                    {item}
                                </div>
                            )
                        })}
                    </span>
                )}
            </div>

        </div>
    )

}

export default ForecastCultivationProgressItem;
