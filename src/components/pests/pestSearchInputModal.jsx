import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import { ArrowSearchIcon, CloseIcon, SearchIcon } from "../../assets/icon";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PestSearchInputModal({
  openSearchModal,
  setOpenSearchModal,
  totalList,
}) {
  const [searchedText, setSearchedText] = React.useState("");
  const [searchedList, setSearchedList] = React.useState([]);

  const handleClickOpen = () => {
    setOpenSearchModal(true);
  };

  const handleClose = () => {
    setOpenSearchModal(false);
  };

  React.useEffect(() => {
    if (searchedText !== "") {
      const newList = totalList.filter((item) => {
        return item.title.toLowerCase().startsWith(searchedText.toLowerCase());
      });

      setSearchedList(newList);
    } else {
      setSearchedList([])
    }
  }, [searchedText]);

  return (
    <div>
      <Dialog
        fullScreen
        open={openSearchModal}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="py-3 px-4">
          <div
            className="d-flex justify-content-end mt-3"
            onClick={() => setOpenSearchModal(false)}
          >
            <CloseIcon fill={"#000"} />
          </div>
          <div className="d-flex mt-4">
            <div
              className="search-field-modal w-100 my-0"
              onClick={() => setOpenSearchModal(true)}
            >
              <span className="search-icon-modal mt-2">
                <SearchIcon />
              </span>

              <input
                className="search-input-field-modal w-100 py-3"
                type="search"
                placeholder="جستجو ..."
                onChange={(e) => setSearchedText(e.target.value)}
              />

              <button
                type="submit"
                className={
                  searchedText.length > 0
                    ? "searchButton-modal-active"
                    : "searchButton-modal"
                }
              >
                <ArrowSearchIcon />
              </button>
            </div>
          </div>
          <hr />

          {searchedList.length > 0 ? (
            <div>
              {searchedList.map((item) => (
                <p>
                  {item.title}
                  <hr/>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-center">نتیجه ای یافت نشد</p>
          )}
        </div>
      </Dialog>
    </div>
  );
}
