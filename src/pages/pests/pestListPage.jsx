import PestBreadCrumb from "../../components/pests/pestBreadCrumb";
import { useSelector } from "react-redux";
import PestItemCard from "../../components/pests/pestItemCard";
import { CloseCircleIcon, FilterIcon } from "../../assets/icon";
import PestFilterModal from "../../components/pests/pestFilterModal";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const PestListPage = () => {
  const pestProduct = useSelector((state) => state.pestProduct);
  const resultList = useSelector((state) => state.pest);
  const { state } = useLocation();
  const { pest_type } = state;
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const menuList = [
    {
      path: "/desises",
      title: "کلینیک مزرعه",
      is_last: false,
    },
    {
      path: "",
      title: pestProduct.product[0].title,
      is_last: true,
    },
  ];

  return (
    <div className="page-container container-fluid pb-5 mb-5">
      <PestBreadCrumb data={menuList} />

      <hr />

      <p className="small mx-2">
        خسارت وارد شده به کدام یک از موارد نزدیک‌تر است؟
      </p>

      <hr />

      <div className="d-flex">
        <div
          className="border px-2 py-1 rounded-3 text-gray d-flex"
          onClick={() => setOpenFilterModal(true)}
        >
          <span className="small">فیلتر کردن</span>
          <FilterIcon />
        </div>

        {/* <div className="d-flex flex-wrap">
          {pest_type.map((item) => (
            <span className="d-flex small pt-2 px-2">
              {item.title}
              <CloseCircleIcon />
            </span>
          ))}
        </div> */}
      </div>
      <hr />

      {resultList?.results.results.map((item) => (
        <PestItemCard item={item} />
      ))}

      <PestFilterModal
        showModal={openFilterModal}
        hideModal={setOpenFilterModal}
      />
    </div>
  );
};

export default PestListPage;
