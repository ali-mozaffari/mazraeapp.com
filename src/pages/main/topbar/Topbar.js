import * as React from "react";
import {
  Avatar,
  Badge,
  Button,
  Fade,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { usePopupState, bindMenu, bindTrigger } from "material-ui-popup-state";
import {
  BellIcon,
  MoneyIcon,
  PencilIcon,
  ExitlIcon,
  AcceptNotification,
  WarningNotification,
  RedWarningNotification,
} from "../../../assets/icon";
import "./Topbar.css";
import avatarIcon from "./../../../assets/img/avatarIcon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "@emotion/styled";
import { bgcolor, borderRadius, Box } from "@mui/system";
import logo from "./../../../assets/img/logo.png";

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const Topbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      sx={{ bgcolor: { xs: "#fff", sm: "#fff", md: "transparent" } }}
      p={2}
      mt={2}
      position="relative !important"
    >
      <Grid
        className="topLogo"
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <img src={logo} />
        <span className="logoTitle">سامانه مزرعه</span>
      </Grid>

      <Grid
        item
        sx={{
          bgcolor: { xs: "#f2f8f6", sm: "#f2f8f6", md: "#fff" },
          position: { xs: "absolute", sm: "absolute", md: "unset" },
          left: { xs: "18%", sm: "18%" },
        }}
        className="bellBadge"
        onClick={handleClick}
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

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: { xs: "hidden", sm: "hidden", md: "visible" },
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
            borderRadius: "10px",
            paddingBottom: "0 !important",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="menuItemNoti">
          <AcceptNotification className="iconNoti" />
          <span style={{paddingRight: "5px"}}>با آپدیت جدید سیستم شما امکان شماره یک رو نیز دارید</span>
        </MenuItem>
        <MenuItem className="menuItemNoti">
          <AcceptNotification className="iconNoti" />
          <span style={{paddingRight: "5px"}}>شما یک آدم جدید به سیستم اضافه کردید</span>
        </MenuItem>
        <MenuItem className="menuItemNoti">
          <WarningNotification className="iconNoti" />
          <span style={{paddingRight: "5px"}}>شما یک مزرعه اضافه کردید</span>
        </MenuItem>
        <MenuItem className="menuItemNoti" style={{paddingBottom: "15px !important"}}>
          <RedWarningNotification className="iconNoti" />
          <span style={{paddingRight: "5px"}}>با آپدیت جدید سیستم شما امکان شماره یک رو نیز دارید</span>
        </MenuItem>
        <MenuItem className="menuItemLastNoti">
          <span>نمایش کامل اعلان ها</span>
        </MenuItem>
      </Menu>

      <div style={{ position: "absolute", left: "0", width: "15%" }}>
        <Grid
          onClick={toggling}
          sx={{
            bgcolor: {
              xs: "#f2f8f6",
              sm: "#f2f8f6",
              md: "#fff",
            },
          }}
          style={{
            borderRadius: "8px",
            display: "flex",
            color: "#383838",
            padding: "0",
            cursor: "pointer",
            margin: "0",
            boxShadow: "none",
          }}
        >
          <Grid
            item
            xs={3}
            className="imgGrid"
            sx={{ bgcolor: { xs: "#cfd3d2", sm: "#cfd3d2", md: "#f2f8f6" } }}
          >
            <img src={avatarIcon} />
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: "12px",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            xs={6}
            pt="15px"
            pr="7px"
          >
            <span>آرمان قربانی</span>
          </Grid>
          <Grid
            xs={3}
            pt="10px"
            maxWidth="7px !important"
            style={{ position: "absolute", left: "20px" }}
          >
            <KeyboardArrowDownIcon />
          </Grid>
        </Grid>
        {isOpen && (
          <Grid
            className="dorpdownBox"
            sx={{
              bgcolor: { xs: "#f2f8f6", sm: "#f2f8f6", md: "#fff" },
              width: { xs: "300%", sm: "150%", md: "100%" },
              fontSize: { xs: "14px !important", sm: "14px !important" },
              marginTop: { xs: "0 !important", sm: "0 !important" },
              borderTopLeftRadius: { xs: "0", sm: "0" },
            }}
          >
            <ListItem className="dropdownli">
              <span style={{ marginLeft: "10px" }}>
                <MoneyIcon fill={{ color: "currentColor" }} />
              </span>
              <span>اعتبار:</span>
            </ListItem>
            <ListItem className="dropdownli">
              <spna style={{ marginLeft: "10px" }}>
                <PencilIcon fill={{ color: "currentColor" }} />
              </spna>
              <span>ویرایش اطلاعات</span>
            </ListItem>
            <ListItem className="dropdownli">
              <span style={{ marginLeft: "10px" }}>
                <ExitlIcon fill={{ color: "currentColor" }} />
              </span>
              <span style={{ color: "#e21f00" }}>خروج از حساب</span>
            </ListItem>
          </Grid>
        )}
      </div>
    </Grid>
  );
};

export default Topbar;
