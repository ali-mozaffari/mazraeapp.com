import * as React from "react";
import { Badge, Button, Fade, Grid, Menu, MenuItem } from "@mui/material";
import { usePopupState, bindMenu, bindTrigger } from "material-ui-popup-state";
import {
  BellIcon,
  MoneyIcon,
  PencilIcon,
  ExitlIcon,
} from "../../../assets/icon";
import "./Topbar.css";
import logo from "./../../../assets/img/avatarIcon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container bgcolor="green" p={2} mt={2} justifyContent="space-between">
      <Grid
        item
        style={{
          backgroundColor: "#fff",
          padding: "11px 16px",
          borderRadius: "5px",
        }}
      >
        <Badge
          variant="dot"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "red",
            },
          }}
        >
          <BellIcon />
        </Badge>
      </Grid>

      <Grid item style={{borderRadius:"8px", width:"25%", backgroundColor:"#fff"}}>
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="topbarProfile"
          >

            <img src={logo} />
            <span style={{padding:"0 15px", fontSize: "15px"}}>آرمان قربانی</span>
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <span>
                <MoneyIcon fill={{ color: "currentColor" }} />
              </span>
              <span>اعتبار:</span>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <span>
                <PencilIcon fill={{ color: "currentColor" }} />
              </span>
              <span>ویرایش اطلاعات</span>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <span>
                <ExitlIcon fill={{ color: "currentColor" }} />
              </span>
              <span>خروج از حساب</span>
            </MenuItem>
          </Menu>
        </div>
      </Grid>
    </Grid>
  );
};

export default Topbar;
