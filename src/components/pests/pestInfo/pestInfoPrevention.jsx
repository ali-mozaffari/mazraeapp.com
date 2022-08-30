import { Collapse } from "@mui/material";
import React from "react";
import { CheckNewIcon } from "../../../assets/pestIcons/checkNewIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const PestInfoPreventionCollapse = ({detect}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center"
        onClick={handleClick}
      >
        <div className="d-flex align-items-center">
          <CheckNewIcon />
          <span>راه‌‌های پیشگیری از آفت زدگی</span>
        </div>
        <div>{open ? <ExpandLess /> : <ExpandMore />}</div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="py-2" style={{textAlign:'justify'}}>
            { detect }
        </div>
      </Collapse>
    </div>
  );
};

export default PestInfoPreventionCollapse;
