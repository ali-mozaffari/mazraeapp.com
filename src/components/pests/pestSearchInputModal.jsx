import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

import { ArrowSearchIcon, CloseIcon, SearchIcon } from "../../assets/icon";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PestSearchInputModal({openSearchModal, setOpenSearchModal}) {
  
  const [ searchedText , setSearchedText ] = React.useState('');
  const handleClickOpen = () => {
    setOpenSearchModal(true);
  };

  const handleClose = () => {
    setOpenSearchModal(false);
  };



  return (
    <div>
        <Dialog
        fullScreen
        open={openSearchModal}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className='py-3 px-4'>
            <div className='d-flex justify-content-end' onClick={() => setOpenSearchModal(false)}>
              <CloseIcon fill={'#000'}/>
            </div>
            <div className='d-flex mt-3'>
                <div className="search-field-modal w-100 my-0" onClick={() => setOpenSearchModal(true)}>
                    <span className="search-icon-modal mt-2">
                    <SearchIcon />
                    </span>

                    <input
                    className="search-input-field-modal w-100 py-3"
                    type="search"
                    placeholder="جستجو ..."
                    onChange={(e) => setSearchedText(e.target.value)}
                    />

                    <button type="submit" className={searchedText.length > 0 ? 'searchButton-modal-active' : 'searchButton-modal'}>
                      <ArrowSearchIcon />
                    </button>
                </div>
            </div> 
            <hr/>

            <p className='text-center'>
              نتیجه ای یافت نشد
            </p>
        </div>

      </Dialog>
    </div>
    );
}

