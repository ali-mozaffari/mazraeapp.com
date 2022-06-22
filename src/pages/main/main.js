import "./main.css";
import Content from "./content/Content";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import { Container, Grid } from "@mui/material";
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
    <Container className="container" maxWidth="xl">   
      <Grid
        container
        spacing={2}
        direction="row-reverse"
        justifyContent="space-between"
      >
        <Grid xs={12} sm={12} md={9} lg={9}>
        <Topbar />
        <Content />
        </Grid>
        
        <Sidebar />
        <SidebarBottom />
      </Grid>
    </Container>
  );
};

export default Main;
