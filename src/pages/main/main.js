import "./main.css";
import Content from "./content/Content";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import {Container, Grid} from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import SidebarBottom from "./Sidebar/SidebarBottom";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Main = () => {
    return (
        <Content/>
    );
};

export default Main;
