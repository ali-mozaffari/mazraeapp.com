import React from "react";
import propTypes from 'prop-types';

import {withRouter} from 'react-router-dom';

import './ForecastCultivationFarmItem.css';
import ForecastCultivationProgressItem from "../ForecastCultivationProgressItem/ForecastCultivationProgressItem";
// import {Alert} from "rsuite";
// import AxiosCustom from "../../../../../assets/AxiosCutom";
// import useAuth from "../../../../../hooks/useAuth";

ForecastCultivationFarmItem.propTypes = {
    data: propTypes.object.isRequired,
    years: propTypes.array.isRequired,
    onAyeshChange: propTypes.array.isRequired,
}

function ForecastCultivationFarmItem(props) {
    const {data, years, onAyeshChange} = props;
    // const auth = useAuth()

    let maxLevel = calculateCultivationLevel(data)
    const _data = [];
    for (let i = 0; i < maxLevel; i++) {
        _data.push(i + 1)
    }

    return (
        <div>
            <h6 className='farm-title-part'>
                {`الگوی کشت مزرعه ${data.name} به مساحت ${data.masahat} هکتار `}
            </h6>

            {years && calculateFarmYearsProgressData(data).map(handleShowingItem)}

            <h6 className='farm-title-part'>
                انتخاب آیش به معنی عدم کشت کل مزرعه در آن سال است و در محاسبات وارد نمی شود
            </h6>


        </div>
    )

    function handleShowingItem(item) {
        return (
            <div>
                <ForecastCultivationProgressItem
                    data={item}
                    farm={data}
                    year_id={years?.filter(el => el.title === item.years[0])[0]?.id}
                    level={1}
                    onAyeshClick={() => setIsAyesh(
                        data.guid,
                        years?.filter(el => el.title === item.years[0])[0]?.id
                    )}
                />

                {item.upLevelMahsuls && item.upLevelMahsuls.length !== 0 && (
                    <ForecastCultivationProgressItem
                        data={item}
                        farm={data}
                        year_id={years?.filter(el => el.title === item.years[0])[0]?.id}
                        level={2}
                        mahsulKey={'upLevelMahsuls'}
                    />
                )}
            </div>
        )
    }

    function calculateFarmYearsProgressData(farm) {
        let data = []

        let _data = {
            masahat: 0,
            years: [],
            mahsuls: [],
            upLevelMahsuls: []
        }

        for (let i = 0; i < farm.cultivation_list.length; i++) {
            const item = farm.cultivation_list[i]

            // if ((level === 1 && item.level === 1) || (level > 1 && item.level > 1)) {
            let indexOf
            data.forEach((element, index) => {
                if (element.years.includes(item.sal?.title)) {
                    indexOf = index
                }
            })

            _data.masahat = farm.masahat
            _data.years = [item.sal?.title]

            if (typeof indexOf === 'number') {
                const mahsuls = []
                const upLevelMahsuls = []
                farm.cultivation_list.forEach(element => {
                    if (element.sal?.title === item.sal?.title) {
                        let indexOfEl
                        let indexOfElLevelUp
                        mahsuls.forEach(((el, indexEl) => {
                            if (el.product_id === element.mahsul.product_id) {
                                indexOfEl = indexEl
                            }
                        }))
                        upLevelMahsuls.forEach(((el, indexEl) => {
                            if (el.product_id === element.mahsul.product_id) {
                                indexOfElLevelUp = indexEl
                            }
                        }))

                        if (element.level === 1) {
                            if (typeof indexOfEl === 'number') {
                                mahsuls[indexOfEl] = {
                                    ...mahsuls[indexOfEl],
                                    masahat: mahsuls[indexOfEl].masahat + parseFloat(element.sathe_zire_kesht)
                                }
                            } else {
                                mahsuls.push({
                                    ...element.mahsul,
                                    masahat: parseFloat(element.sathe_zire_kesht)
                                })
                            }
                        } else {
                            if (typeof indexOfElLevelUp === 'number') {
                                upLevelMahsuls[indexOfElLevelUp] = {
                                    ...upLevelMahsuls[indexOfElLevelUp],
                                    masahat: upLevelMahsuls[indexOfElLevelUp].masahat + parseFloat(element.sathe_zire_kesht)
                                }
                            } else {
                                upLevelMahsuls.push({
                                    ...element.mahsul,
                                    masahat: parseFloat(element.sathe_zire_kesht)
                                })
                            }
                        }

                    }
                })

                data[indexOf] = {
                    ..._data,
                    mahsuls: mahsuls,
                    upLevelMahsuls: upLevelMahsuls
                }
            } else {
                data.push({
                    ..._data,
                    mahsuls: [{
                        ...item.mahsul,
                        masahat: parseFloat(item.sathe_zire_kesht)
                    }]
                })
            }
            // }
        }

        const __data = [...data]
        // if ((level === 1 && levels.length === 1) || (levels.length > 1 && level > 1)) {
        years.forEach(item => {
            let isExist = false
            data.forEach(element => {
                if (element.years.includes(item.title)) {
                    isExist = true;
                }
            })

            if (!isExist) {
                __data.push({
                    masahat: farm.masahat,
                    years: [item.title],
                    mahsuls: []
                })
            }
        })
        // }

        return __data
    }

    function calculateCultivationLevel(farm) {
        let maxLevel = 1

        for (let i = 0; i < farm.cultivation_list.length; i++) {
            const item = farm.cultivation_list[i]

            if (item.level > maxLevel) {
                maxLevel = item.level;
            }
        }

        return maxLevel
    }

    function setIsAyesh(farm_guid, year_id) {
        let fd = {
            farm: farm_guid,
            year: year_id
        };
        // const options = {
        //     method: 'PATCH',
        //     url: 'farm/farm',
        //     headers: {
        //         Authorization: auth.token
        //     },
        //     data: JSON.stringify(fd),
        // };

        // console.log(options);
        // AxiosCustom(options).then(res => {
        //     console.log(res);
        //     onAyeshChange()
        // }).catch(err => {
        // });
    }
}

export default ForecastCultivationFarmItem;
