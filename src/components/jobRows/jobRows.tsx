import * as React from 'react';
import "./jobRows.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Shift, Location, Contact } from "../../store/types";
import { JobRowContact, JobRowLocation, JobRowShift, JobRowRequirement } from "./jobRowFragments";

const ROWS = {
    CONTACT: JobRowContact,
    LOCATION: JobRowLocation,
    REQUIREMENTS: JobRowRequirement,
    SHIFTS: JobRowShift
};

const ICONS = {
    CONTACT: faUserCircle,
    LOCATION: faMapMarkerAlt,
    REQUIREMENTS: faTools,
    SHIFTS: faCalendarAlt
};

export enum JobRowTypes {
    SHIFTS = "SHIFTS",
    LOCATION = "LOCATION",
    REQUIREMENTS = "REQUIREMENTS",
    CONTACT = "CONTACT"
};

export interface IJobRowsProps {
    rows: {
        type: JobRowTypes,
        title: string
        content: Shift[] | Location | string[] | Contact
    }[]
}

export const JobRows: React.FC<IJobRowsProps> = ({ rows }) => {

    if(!rows) return <React.Fragment>Sorry, there are now avilable job details</React.Fragment>

    return <div className="job-rows">
        {rows.map ((item, index) => {
            if(item.content) {
                const RowComp = ROWS[item.type];
                return <div className="job-rows__item" key={index}>
                    <div className="job-rows__item-icon">
                        <FontAwesomeIcon icon={ICONS[item.type]} />
                    </div>
                    <div className="job-rows__item-content">
                        <div className="job-rows__item-title">{item.title}</div>
                        <RowComp {...item} />
                    </div>
                </div>
            }
        })}
    </div>

}