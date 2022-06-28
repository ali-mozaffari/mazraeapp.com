import React from 'react';
import closeIcon from './../../assets/img/close-notification.png';
import InvitationAlert from "../../components/invitation/invitationAlert";
import InvitationsCountBox from "../../components/invitation/invitationsCountBox";
import SendInvitationForm from "../../components/invitation/sendInvitationForm";
import ShareAnotherApp from "../../components/invitation/shareAnotherApp";
import {Box, Fade, FormControlLabel, Paper, Switch} from "@mui/material";
import {ArrowDownIcon} from "../../assets/icon";

const icon = (

    <div className="py-4">
        <ShareAnotherApp/>
    </div>

);


const InvitationsPage = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className="page-container container-fluid">

            <InvitationAlert/>

            <InvitationsCountBox/>

            <hr/>

            <SendInvitationForm/>

            <hr/>

            {
                checked ? <Fade in={checked}>{icon}</Fade> : null
            }


            <p className="text-dark-blue mt-4 text-center" onClick={handleChange}>
                روش های اشتراک بیشتر
                <span className="mx-3">
                    <ArrowDownIcon/>
                </span>
            </p>

        </div>
    );
};

export default InvitationsPage;
