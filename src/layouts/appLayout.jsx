import React from 'react';
import {Container, Grid} from "@mui/material";
import Topbar from "../pages/main/topbar/Topbar";
import Content from "../pages/main/content/Content";
import Sidebar from "../pages/main/Sidebar/Sidebar";
import SidebarBottom from "../pages/main/Sidebar/SidebarBottom";

const AppLayout = ({children}) => {
    return (
        <div>
            <Container className="container" maxWidth="xxl">
                <Grid
                    container
                    spacing={0}
                    direction="row-reverse"
                    justifyContent="space-between"
                >
                    <Grid xs={12} sm={12} md={9} lg={9}>
                        <Topbar/>
                        {children}
                    </Grid>

                    <Sidebar/>
                    <SidebarBottom/>
                </Grid>
            </Container>
        </div>
    );
};

export default AppLayout;
