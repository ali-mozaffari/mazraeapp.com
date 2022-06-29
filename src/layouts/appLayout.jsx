import React from 'react';
import {Container, Grid} from "@mui/material";
import Topbar from "../components/main/topbar/Topbar";
import Sidebar from "../components/main/Sidebar/Sidebar";
import SidebarBottom from "../components/main/Sidebar/SidebarBottom";

const AppLayout = ({children}) => {
    return (
        <div>
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="row-reverse"
                    justifyContent="space-between"
                >
                    
                    <Grid xs={12} sm={12} md={9} lg={8} px={2} className="mx-auto">
                    <Topbar/>
                        {children}
                    </Grid>

                    <Sidebar/>
                    <SidebarBottom/>
                </Grid>
            </div>
        </div>
    );
};

export default AppLayout;
