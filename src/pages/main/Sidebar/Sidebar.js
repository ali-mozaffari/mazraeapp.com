import {
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
import logo from './../../../assets/img/logo.png';


const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItem = [
    {
      text: "مزرعه من",
      icon: <StayHome fill="currentColor" />,
      path: "/home",
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

  return (
    <Grid
      item
      // p={2}
      // pt={0}
      xs={12}
      sm={12}
      md={3}
      lg={3}
      className="sidebarGrid"
      sx={{
        display: { xs: "none", sm: "none", md: "block", lg: "block" },
        maxWidth: {
          xs: "100% !important",
          sm: "100% !important",
          md: "23% !important",
          lg: "23% !important",
        },
        // style={{}}
      }}
    >
      <div className="sidebarTop">
      <img src={logo}/>
        <span className="sidebarTopSpan">سامانه مزرعه</span></div>
      {sidebarItem.map((item) => (
        <List key={item.text} disablePadding className="list">
          <div
            style={
              location.pathname === item.path
                ? {
                    color: "#16db93",
                    borderRight: "5px solid #16db93",
                  }
                : null
            }
            className="sidebarli"
          >
            <ListItem disablePadding onClick={() => navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon
                  style={{ color: "currentColor", paddingRight: "10px" }}
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
    </Grid>
  );
};

export default Sidebar;
