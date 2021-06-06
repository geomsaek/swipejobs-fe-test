import * as React from 'react';
import "./jobTitleBar.scss";

export interface IJobTitleBarProps {
    title: string
    company: string
};

export const JobTitleBar: React.FC<IJobTitleBarProps> = ({ title, company }) => {

    if(!title) return <React.Fragment></React.Fragment>
    return <div className="job-title-bar">
        <div className="job-title-bar__role">{title}</div>
        {company ? <div className="job-title-bar__company">{company}</div> : null}
    </div>

}