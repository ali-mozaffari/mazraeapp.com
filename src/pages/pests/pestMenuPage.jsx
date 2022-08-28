import React, { useState } from "react";
import PestProductHeader from "./../../components/pests/pestProductHeader";
import { ArrowSearchIcon, SearchIcon } from "../../assets/icon";
import { FilterNewIcon } from "../../assets/pestIcons/filterIconNew";
import { InfoNewIcon } from "../../assets/pestIcons/infoNewIcon";
import { DeskNewIcon } from "../../assets/pestIcons/deskNewICon";
import PestSearchInputModal from "./../../components/pests/pestSearchInputModal";
import PestFilterModal from "./../../components/pests/pestFilterModal";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getResultsList } from "../../redux/slice/pests/pests";

const PestMenuPage = () => {
  const pestProduct = useSelector((state) => state.pestProduct);
  const [totalList, setTotalList] = React.useState([]);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const resultList = useSelector((state) => state.pest);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (totalList.length === 0) {
      let data = {
        mahsul_guid: pestProduct.product[0].guid,
      };
      dispatch(getResultsList(data));
      setTotalList(resultList.results)
    }
  }, []);

  return (
    <div className="page-container container-fluid mb-5">
      <PestProductHeader />

      <hr className="py-0" />

      <div className="d-flex">
        <div
          className="search-field-modal w-100 my-0"
          onClick={() => setOpenSearchModal(true)}
        >
          <span className="search-icon-modal mt-2">
            <SearchIcon />
          </span>

          <input
            disabled
            className="search-input-field-modal w-100 py-3"
            type="search"
            placeholder="جستجو ..."
          />

          <button type="submit" className="searchButton-modal">
            <ArrowSearchIcon />
          </button>
        </div>
      </div>

      <hr />

      <div>
        <button
          className="btn-outline-dark-blue d-flex justify-content-between px-3"
          onClick={() => setOpenFilterModal(true)}
        >
          <div>
            <FilterNewIcon />
            <span className="px-2">فیلتر کردن</span>
          </div>
          <div>
            <ArrowSearchIcon fill={"#2C689A"} />
          </div>
        </button>
      </div>

      <div onClick={() => navigate("/desises-questions")}>
        <button className="btn-outline-dark-blue d-flex justify-content-between px-3 mt-3">
          <div>
            <InfoNewIcon fill={"#2C689A"} />
            <span className="px-2">پرسش و پاسخ</span>
          </div>
          <div>
            <ArrowSearchIcon fill={"#2C689A"} />
          </div>
        </button>
      </div>

      <div>
        <button className="btn-outline-dark-blue d-flex justify-content-between px-3 mt-3">
          <div>
            <DeskNewIcon fill={"#2C689A"} />
            <span className="px-2">پیگیری آزمایشات</span>
          </div>
          <div>
            <ArrowSearchIcon fill={"#2C689A"} />
          </div>
        </button>
      </div>

      <PestSearchInputModal
        openSearchModal={openSearchModal}
        setOpenSearchModal={setOpenSearchModal}
        totalList={totalList}
      />
      <PestFilterModal
        showModal={openFilterModal}
        hideModal={setOpenFilterModal}
      />
    </div>
  );
};

export default PestMenuPage;
