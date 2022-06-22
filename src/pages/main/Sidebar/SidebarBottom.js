import * as React from "react";
import {
  Drawer,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  StayHome,
  News,
  CloudyDay,
  Apple,
  Configuration,
  BlockUser,
  Path16,
  Insect,
} from "../../../assets/icon";
import "./Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";

type Anchor = "بیشتر ...";

const SidebarBottom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarBottomItemShow = [
    {
      text: "مزرعه من",
      icon: <StayHome fill="currentColor" />,
      path: "/",
    },
    {
      text: "فعالیت ها",
      icon: <News fill="currentColor" />,
      path: "/activity",
    },
    {
      text: "پیش بینی آب و هوا",
      icon: <CloudyDay fill="currentColor" />,
      path: "/weatherforcast",
    },
  ];
  const sidebarBottomItemHide = [
    {
      text: "پیش بینی تولید",
      icon: <Apple fill="currentColor" />,
      path: "/productionfocast",
    },
    {
      text: "خدمات فنی, مالی و حسابداری",
      icon: <Configuration fill="currentColor" />,
      path: "/financialservices",
    },
    {
      text: "گزارش حدنگاری",
      icon: <BlockUser fill="currentColor" />,
      path: "/report",
    },
    {
      text: "دسترسی ها",
      icon: <BlockUser fill="currentColor" />,
      path: "/access",
    },
    {
      text: "ارسال یا اشتراک دعوتنامه",
      icon: <Path16 fill="currentColor" />,
      path: "/invitation",
    },
    {
      text: "آفت, بیماری و علف هرز",
      icon: <Insect fill="currentColor" />,
      path: "/desises",
    },
  ];

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (event.React.KeyboardEvent.key === "Tab" ||
          event.React.KeyboardEvent.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      // sx={{ pos: anchor === "bottom" ? "auto" : 250 }}
      // role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sidebarBottomItemHide.map((item) => (
          <List key={item.text} disablePadding className="list">
            <div
              style={
                location.pathname === item.path
                  ? { color: "#16db93", borderRight: "5px solid #16db93" }
                  : null
              }
              className="sidebarli"
            >
              <ListItem disablePadding onClick={() => navigate(item.path)}>
                <ListItemButton sx={{ display: "block", textAlign: "right" }}>
                  <ListItemText
                    className="sidebarTextBottom"
                    primary={item.text}
                  />
                  <ListItemIcon
                    style={{ color: "currentColor", paddingRight: "10px" }}
                    className="sidebarIcon"
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </div>
          </List>
        ))}
      </List>
    </Box>
  );

  return (
    <Grid
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "none",
          lg: "none",
          xl: "none",
        },
        fontSize: {
          xs: "10px !important",
        },
        bottom: 0,
        position: "fixed",
      }}
      className="sidebarBottomGrid"
    >
      {sidebarBottomItemShow.map((item) => (
        <List key={item.text} disablePadding className="list bottom">
          <div
            style={
              location.pathname === item.path
                ? {
                    color: "#16db93",
                    borderBottom: "5px solid #16db93",
                  }
                : null
            }
            className="sidebarli"
          >
            
            <ListItem disablePadding onClick={() => navigate(item.path)}>
              <ListItemButton sx={{ display: "block", textAlign: "center" }}>
                <ListItemIcon
                  style={{ color: "currentColor" }}
                  className="sidebarIcon"
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText className="sidebarText" primary={item.text} />
              </ListItemButton>
            </ListItem>
            
          </div>
        </List>
      ))}
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>بیشتر ...</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            // variant={"persistent"}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default SidebarBottom;
