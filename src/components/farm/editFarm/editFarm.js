import { useState } from "react";
import BreadCrumbs from "./../../tools/breadcrumbs/breadcrumbs";
import "./../main.css";

const EditFarm = () => {
//   const [crumbs, setCrumbs] = useState(['مزرعه من', 'ویرایش مشخصات مزرعه']);
  const title = ['مزرعه من', 'ویرایش مشخصات مزرعه']
  const selected = (crumb) => {};
  return (
    <div className="page-container container-fluid">
      <BreadCrumbs crumbs={title} selected={selected} />
    </div>
  );
};

export default EditFarm;
