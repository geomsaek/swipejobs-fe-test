import * as React from 'react';
import { convertToUSTimeZone } from "../../core/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'

// Job row fragments

export const JobRowLocation = (props) => {

    const addressAsURLParam = encodeURI(props.content.address);
    return <React.Fragment>
        <a className="job-rows__item-map" target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${addressAsURLParam}`}>
            <div className="job-rows__item-address">{props.content.address}</div>
            <div className="job-rows__item-distance">{props.content.distance}</div>
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
        </a>
    </React.Fragment>

}

export const JobRowRequirement = (props) => {
    return <React.Fragment>
        <ul>{props.content.map((item, index) => {
            return <li key={index}>{item}</li>
        })}</ul>
    </React.Fragment>
}

export const JobRowContact = (props) => {
    return <React.Fragment>
        <p>{props.content.name} {props.content.phone ? <a href={`tel:${props.content.phone}`}>{props.content.phone}</a> : null}</p>
    </React.Fragment>
}

export const JobRowShift = (props) => {

    const zoneId = props.content.zoneId;
    const dateFormatOptions = { 
        timeZone: zoneId, 
        weekday: 'short', 
        hour: 'numeric',
        minute: 'numeric', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
    };

    return <React.Fragment>
        {props.content.shifts.map((item, index) => {
            return <div className="job-rows__item-date" key={index}>
                {convertToUSTimeZone(item.startDate, dateFormatOptions)} - {convertToUSTimeZone(item.endDate, dateFormatOptions)} PDT
            </div>
        })}
    </React.Fragment>
}
