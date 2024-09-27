import FrontPageLayout from "@/Layouts/FrontPageLayout";
import StaffAnnouncementCard from "@/Sections/StaffAnnouncementCard";
import StaffAnnouncementForm from "@/Sections/StaffAnnouncementForm";

import React, { useState, useEffect } from "react";

function StaffMudaAnnouncement(props) {
    const [dataStaff, setDataStaff] = useState({});

    useEffect(() => {
        setDataStaff(props.staff_muda);
    }, [props.staff_muda]);

    return (
        <FrontPageLayout>
            {dataStaff ? (
                <StaffAnnouncementCard dataStaff={dataStaff} />
            ) : (
                <StaffAnnouncementForm error={props.flash.error} />
            )}
        </FrontPageLayout>
    );
}

export default StaffMudaAnnouncement;
