import React, { useState, memo } from "react";
import { Modal } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import closeNotification from "../../assets/img/close-notification.png";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { PestNewIcon } from './../../assets/pestIcons/pestIconNew';
import { DiseasesNewIcon } from './../../assets/pestIcons/diseasesNewIcon';
import { FungalNewIcon } from './../../assets/pestIcons/fungalNewIcon';
import { BacteriNewIcon } from './../../assets/pestIcons/bacteriNewIcon';
import { VirusNewIcon } from './../../assets/pestIcons/virusNewIcon';
import { WeedNewIcon } from './../../assets/pestIcons/weedNewIcon';
import { NutrationNewIcon } from './../../assets/pestIcons/nutrationNewIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { set } from "date-fns";


const IOSSwitch = styled((props) => (
    <Switch checked={props.value ? props.value : false} focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#16DB93',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#f00',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));


  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#16DB93',
        darker: '#053e85',
        backgroundColor:'#f00'
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#16DB93',
        darker: '#053e85',
        
        backgroundColor:'#f00'
      },
    },
  });
const PestFilterModal = ({ showModal, hideModal, data }) => {
  const [pest, setPest] = useState(false);
  const [diseases, setDiseases] = useState(false);
  const [fungal, setFungal] = useState(false);
  const [bacteri, setBacteri] = useState(false);
  const [virus, setVirus] = useState(false);
  const [weed, setWeed] = useState(false);
  const [nutration, setNutration] = useState(false);

  const diseasesOnCLick = (val) => {

      setFungal(val);
      setBacteri(val);
      setVirus(val);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let data = {}

    

  };

  return (
    <Modal centered show={showModal} className="farm-field-modal">
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
            <div
            className="farm-field-modal-header"
            style={{ boxShadow: "none", padding: "30px 15px 5px 35px" }}
            >
            <div>
                <img
                src={closeNotification}
                alt=""
                style={{
                    position: "absolute",
                    left: "40px",
                    top: "30px",
                    height: "16px",
                    cursor: "pointer",
                }}
                onClick={() => hideModal(false)}
                />

                <h6 style={{ fontWeight: "800", color: "#676767" }}>
                فیلتر آفات و بیماری‌ها
                </h6>
            </div>
            </div>
            <hr/>

            <FormGroup>
                <div className="d-flex justify-content-between px-4">
                    <div className="d-flex">
                        <PestNewIcon active={pest} fill={pest ? '#16DB93' : '#E4E4E4'}/>
                        <p style={{fontWeight:800}} className="pt-1 mx-2">
                        آفات
                        </p>
                    </div>

                    <FormControlLabel
                        control={<IOSSwitch value={pest} sx={{ m: 1 }}/>}
                        onChange={(e) => setPest(e.target.checked)}
                    />
                </div>
            </FormGroup>

            <hr/>

            <FormGroup>
                <div className="d-flex justify-content-between px-4">
                    <div className="d-flex">
                        <DiseasesNewIcon active={diseases}/>
                        <p style={{fontWeight:800}} className="mx-2">
                        بیمار‌ی‌ها
                        </p>
                    </div>
                    <FormControlLabel
                        control={<IOSSwitch value={diseases} sx={{ m: 1 }}  />}
                        onChange={(e) => {
                          setDiseases(e.target.checked)
                          diseasesOnCLick(e.target.checked);
                        }}
                    />
                </div>
            </FormGroup>


            <FormGroup>
                <div className="d-flex justify-content-between px-4 mt-2">
                    <div className="d-flex">
                        <FungalNewIcon active={fungal}/>
                        <p className="pt-1 mx-2">
                        قارچ
                        </p>
                    </div>
                    <FormControlLabel
                        control={<IOSSwitch value={fungal} sx={{ m: 1 }}  />}
                        onChange={(e) => setFungal(e.target.checked)}
                    />
                </div>
            </FormGroup>



            <FormGroup>
                <div className="d-flex justify-content-between px-4 mt-2">
                    <div className="d-flex">
                        <BacteriNewIcon active={bacteri}/>
                        <p className="pt-1 mx-2">
                        باکتری
                        </p>
                    </div>
                    <FormControlLabel
                        control={<IOSSwitch value={bacteri} sx={{ m: 1 }}  />}
                        onChange={(e) => setBacteri(e.target.checked)}
                    />
                </div>
            </FormGroup>

            <FormGroup>
                <div className="d-flex justify-content-between px-4 mt-2">
                    <div className="d-flex">
                        <VirusNewIcon active={virus}/>
                        <p className="pt-1 mx-2">
                        ویروس
                        </p>
                    </div>
                    <FormControlLabel
                        control={<IOSSwitch value={virus} sx={{ m: 1 }}  />}
                        onChange={(e) => setVirus(e.target.checked)}
                    />
                </div>
            </FormGroup>

            <hr/>


            <FormGroup>
                <div className="d-flex justify-content-between px-4">
                    <div className="d-flex">
                        <WeedNewIcon active={weed}/>
                        <p style={{fontWeight:800}} className="mx-2">
                        علف هرز
                        </p>
                    </div>
                    <FormControlLabel
                        control={<IOSSwitch value={weed} sx={{ m: 1 }}  />}
                        onChange={(e) => setWeed(e.target.checked)}
                    />
                </div>
            </FormGroup>

            <hr/>


            <FormGroup>
                <div className="d-flex justify-content-between px-4">
                    <div className="d-flex">
                        <NutrationNewIcon active={nutration}/>
                        <p style={{fontWeight:800}} className="mx-2">
                        تغذیه
                        </p>
                    </div>
                    <FormControlLabel
                        control={<IOSSwitch value={nutration} sx={{ m: 1 }}  />}
                        onChange={(e) => setNutration(e.target.checked)}
                    />
                </div>
            </FormGroup>

            {/* <hr/> */}
            
            <div className="farm-field-modal-footer justify-content-center border-top-0">
            <div
                className="col-12 d-flex mt-3"
                style={{ justifyContent: "space-around" }}
            >
                <div className="mx-2">
                <button
                    className="farm-field-modal-btn btn btn-light-green"
                    type="submit"
                    onClick={() => hideModal(false)}

                >
                    ثبت
                </button>
                </div>
                <div className="mx-2 d-flex align-items-center">
                <button
                    className="btn btn-md btn-block"
                    type="button"
                    onClick={() => hideModal(false)}
                >
                    انصراف
                </button>
                </div>
            </div>
            </div>
            </form>
        </ThemeProvider>
    </Modal>
  );
};

export default PestFilterModal;