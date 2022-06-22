import * as React from "react";
import { Badge, Button, Fade, Grid, Menu, MenuItem } from "@mui/material";
import { usePopupState, bindMenu, bindTrigger } from "material-ui-popup-state";
import { BellIcon } from "../../../assets/icon";
import "./Topbar.css";

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

      <Grid item bgcolor="#fff">
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Dashboard
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Grid>
    </Grid>
  );
};

export default Topbar;
