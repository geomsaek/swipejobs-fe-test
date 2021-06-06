import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { getUserProfile, getJobList } from "../store/selectors";
import { useLocation } from "react-router-dom";
import { getCurrentJobFromId } from "../core/utils";

export const Head: React.FC<{ type: string }> = ({ type }) => {
    
    const location = useLocation();

    const profile = useSelector(getUserProfile);
    const jobList = useSelector(getJobList);
    const currentJob = getCurrentJobFromId(location.pathname, jobList.jobs);
    
    return <Helmet>
        {type == "profile" ? <title>Swipejobs: Profile - {profile.firstName} {profile.lastName}</title> : <title>Swipejobs: Profile</title>}
        {type == "jobList" ? <title>Swipejobs: Your job listing</title> : <title>Swipejobs: Jobs</title>}
        {type == "jobView" && currentJob.length != 0 ? <title>{`Swipejobs: ${currentJob[0].company.name} - ${currentJob[0].jobTitle.name}`}</title> : <title>Swipejobs: Job View</title>}
    </Helmet>;

}