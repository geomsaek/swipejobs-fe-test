import * as React from 'react';
import "./jobHeader.scss";
import { JobTitleBar, IJobTitleBarProps } from "../jobTitleBar/jobTitleBar";
import { JobHighlightBar } from "../jobHighlightBar/jobHighlightBar";
import { BgImg } from '../bgImg/bgImg';

interface IJobHeaderProps {
    bgImg: {
        src: string
        title: string
    }
    title: IJobTitleBarProps
    details: {
        title: string
        value: string
    }[];
};

export const JobHeader: React.FC<IJobHeaderProps> = ({ bgImg, title, details }) => {

    return <div className="job-header">
        <div className="job-header__content">
            <div className="job-header__img">
                <BgImg {...bgImg} />
            </div>
            {title ? <JobTitleBar {...title} /> : null}
            {details ? <JobHighlightBar columns={details} /> : null}
        </div>
    </div>

}