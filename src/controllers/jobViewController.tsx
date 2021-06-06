import * as React from 'react';
import { useLocation } from "react-router-dom";
import { JobRows } from "../components/jobRows/jobRows";
import { JobHeader } from "../components/jobHeader/jobHeader";
import { JobActionBtns } from "../components/jobActionBtns/jobActionBtns";
import { useSelector } from 'react-redux';
import { getJobList } from "../store/selectors";
import { ErrorViewController } from './errorViewController';
import { convertToRoundedDistance, convertToDollarValue, formatDataToRows } from "../core/utils";
import { getCurrentJobFromId } from "../core/utils";

// displays the current job details
export const JobViewController = () => {

    const location = useLocation();
    const jobs = useSelector(getJobList);
    const currentJob = getCurrentJobFromId(location.pathname, jobs.jobs);
    
    if(currentJob.length == 0) return <ErrorViewController title="Sorry the job your are viewing may have been removed or is no longer available" />
    
    const payPerHour = convertToDollarValue(currentJob[0].wagePerHourInCents);
    const jobRowData = formatDataToRows(currentJob[0]);

    return <div className="component-wrapper">
        <div className="component-wrapper__inner">
            <JobHeader
                bgImg={{
                    src: currentJob[0].jobTitle.imageUrl,
                    title: currentJob[0].jobTitle.name
                }}
                title={{
                    title: currentJob[0].jobTitle.name,
                    company: currentJob[0].company.name
                }}
                details={[
                    {
                        title: "Distance",
                        value: `${convertToRoundedDistance(currentJob[0].milesToTravel)} miles`
                    },
                    {
                        title: "Hourly Rate",
                        value: `<sup>$</sup>${payPerHour.toFixed(2)}`
                    }
                ]}
            />
            <JobRows rows={jobRowData.rows} />
            <JobActionBtns id={currentJob[0].jobId} />
        </div>
    </div>

}